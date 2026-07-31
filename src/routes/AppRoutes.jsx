import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/common/ScrollToTop";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Journey from "../pages/Journey";
import Projects from "../pages/Projects";
import Research from "../pages/Research";
import ResearchDetail from "../pages/ResearchDetail";
import Insights from "../pages/Insights";
import CV from "../pages/CV";
import Contact from "../pages/Contact";
import Hub from "../pages/Hub";
import Playground from "../pages/Playground";
import NotFound from "../pages/NotFound";

function AppRoutes() {

    return (

        <BrowserRouter>

            <ScrollToTop />

            <Routes>

                <Route element={<MainLayout />}>

                    {/* Home */}

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* About */}

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    {/* Journey */}

                    <Route
                        path="/journey"
                        element={<Journey />}
                    />

                    {/* Projects */}

                    <Route
                        path="/projects"
                        element={<Projects />}
                    />

                    {/* Research */}

                    <Route
                        path="/research"
                        element={<Research />}
                    />

                    <Route
                        path="/research-contributions/:slug"
                        element={<ResearchDetail />}
                    />

                    {/* Knowledge Hub */}

                    <Route
                        path="/knowledge-hub"
                        element={<Hub />}
                    />

                    {/* Insights */}

                    <Route
                        path="/insights"
                        element={<Insights />}
                    />

                    {/* CV */}

                    <Route
                        path="/cv"
                        element={<CV />}
                    />

                    {/* Contact */}

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                    {/* 404 */}

                    <Route
                        path="*"
                        element={<NotFound />}
                    />

                </Route>

                {/* Playground */}

                <Route
                    path="/playground"
                    element={<Playground />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;