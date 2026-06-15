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

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <MainLayout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/journey" element={<Journey />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/research" element={<Research />} />

          <Route path="/insights" element={<Insights />} />

          <Route path="/cv" element={<CV />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
}

export default AppRoutes;