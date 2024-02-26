import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Register from "pages/register/register";
const Stronagwna = React.lazy(() => import("pages/mainPage/mainPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="/register" element={<Register/>} /> */}
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
