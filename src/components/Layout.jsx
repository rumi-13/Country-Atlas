import Navbar from "./header/Navbar";
import { Outlet } from "react-router-dom";
import About from "./header/About";
import Footer from "./footer/Footer"

const Layout = () => (
  <div className="h-fit flex flex-col overflow-x-hidden">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer/>
  </div>
);

export default Layout;