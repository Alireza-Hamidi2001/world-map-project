import styles from "./Logo.module.scss";
import logo from "./../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Logo() {
    return (
        <NavLink to="/">
            <img
                src={logo}
                alt="WorldWise logo"
                className={styles.logo}
            />
        </NavLink>
    );
}

export default Logo;
