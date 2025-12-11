import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <section className="p-5 lg:py-7 lg:px-28 relative">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Layout;
