import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/common/ScrollToTop";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Journey from "../pages/Journey";
import Projects from "../pages/Projects";
import Research from "../pages/Research";
import Insights from "../pages/Insights";
import CV from "../pages/CV";
import Contact from "../pages/Contact";
import Hub from "../pages/Hub";

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/journey"
            element={<Journey />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/research"
            element={<Research />}
          />

          <Route
            path="/insights"
            element={<Insights />}
          />

          <Route
            path="/cv"
            element={<CV />}
          />

          <Route 
            path="/knowledge-hub" 
            element={<Hub />} />  

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;