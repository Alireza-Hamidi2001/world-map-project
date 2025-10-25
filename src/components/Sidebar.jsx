import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import PageNav from "./PageNav";
import styles from "./Sidebar.module.scss";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />  
            <Footer />
        </div>
    );
}

export default Sidebar;
