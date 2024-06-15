import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="main-layout">
      <div className="main-layout-left-sidebar">
        <SideBar />
      </div>
      <div className="main-layout-right-content">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
