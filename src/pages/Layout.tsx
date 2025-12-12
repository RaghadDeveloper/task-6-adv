import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <section className="p-5 lg:py-7 lg:px-28 relative">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
