import styles from "./Sidebar.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; copyrigh {new Date().getFullYear()} by{" "}
                <i>
                    <b>Alireza Hamidi</b>
                </i>{" "}
                base a design of{" "}
                <i>
                    <b>Jonas Schmedtmann</b>
                </i>
                .
            </p>
        </footer>
    );
}

export default Footer;
