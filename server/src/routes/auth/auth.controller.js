const { genHash, validatePassword } = require("../../../lib/passwordUtil");
const { findUser, createUser } = require("../../models/User/user.model");
const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv();
addFormats(ajv);

// Register User
async function register(req, res) {
  const { username, email, password } = req.body;
  const userInput = {
    username,
    email,
    password,
  };
  const schema = {
    type: "object",
    properties: {
      username: { type: "string" },
      email: { type: "string", format: "email" },
      password: { type: "string", minLength: 8 },
    },
    required: ["username", "email", "password"],
  };

  const validate = ajv.compile(schema);
  const valid = validate(userInput);
  if (!valid) {
    const errors = validate.errors;
    return res.status(400).json(errors);
  }
  try {
    const existingUser = await findUser(username);
    if (existingUser) return res.json({ error: "Username already exists" });
    const { salt, hash } = genHash(password);
    const newUser = {
      username,
      email,
      salt,
      hash,
    };
    const user = await createUser(newUser);
    return res.status(201).json(user.username);
  } catch (error) {
    console.error({ error });
    if (error) {
      throw new Error({
        error: "Something went wrong when registering this user",
      });
    }
    return { error };
  }
}

// Login User
async function login(req, res) {
  if (req.isAuthenticated()) {
    res.json({ msg: "What are we doing with all this future?" });
  }
  const { username, password } = req.body;

  const userInput = {
    username,
    password,
  };

  const schema = {
    type: "object",
    properties: {
      username: { type: "string", maxLength: 15 },
      password: { type: "string", minLength: 8 },
    },
    required: ["username", "password"],
  };

  const validate = ajv.compile(schema);
  const valid = validate(userInput);
  if (!valid) {
    const errors = validate.errors;
    return res.status(400).json(errors);
  }
  try {
    const user = await findUser(username);
    if (!user) {
      return res.status(404).json({ error: "Invalid username or password" });
    }
    const validateUserPasswordInput = validatePassword(
      password,
      user.salt,
      user.hash
    );
    if (!validateUserPasswordInput) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
}

// Logout User
async function logout(req, res) {
  req.logout();
  res.redirect("/login");
}

function getUser(req, res) {
  res.send(req.user);
}

module.exports = {
  register,
  login,
  logout,
  getUser,
};
