import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";

function PageRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Feed />} />
      </Routes>
    </Fragment>
  );
}

export default PageRoutes;
