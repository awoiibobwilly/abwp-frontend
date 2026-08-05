import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ScrollProgress from "../components/shared/ScrollProgress";
import BackToTop from "../components/shared/BackToTop";
import BredKrums from "../components/shared/BredKrums";

function MainLayout() {

    const { pathname } = useLocation();

    /* ==========================================
       PAGES WITH THEIR OWN BREADCRUMBS
    ========================================== */

    const hideGlobalBreadcrumb =

        pathname.startsWith(
            "/knowledge-hub/research-contributions/"
        );

    return (

        <>

            <ScrollProgress />

            <Navbar />

            {!hideGlobalBreadcrumb && (

                <BredKrums />

            )}

            <main className="main-content">

                <Outlet />

            </main>

            <Footer />

            <BackToTop />

        </>

    );

}

export default MainLayout;