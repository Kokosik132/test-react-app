import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Posts from "pages/Posts";

export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="userPost" element={<Posts />} />
    </Routes>
  );
}
