import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollProgress from "../components/shared/ScrollProgress";
import PageTransition from "../components/shared/PageTransition";
import BackToTop
from "../components/shared/BackToTop";
import BredKrums from "../components/shared/BredKrums";

function MainLayout() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <BredKrums />

      <main className="main-content">

      <PageTransition>

      <Outlet />

      </PageTransition>

      </main>

      <Footer />

      <BackToTop />

    </>
  );
}

export default MainLayout;