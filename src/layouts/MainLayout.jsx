import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollProgress from "../components/shared/ScrollProgress";

function MainLayout() {
  return (
    <>
      
      <Navbar />

      <ScrollProgress />

      <main className="main-content">

        <Outlet />

      </main>

      <Footer />

    </>
  );
}

export default MainLayout;