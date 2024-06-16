import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import "./layout.scss";
import LoadingPage from "../components/common/loading/LoadingPage";

const Layout = () => {
  return (
    <div className="main-layout">
      {/*<LoadingPage />*/}
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
