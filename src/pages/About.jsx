import PageNav from "../components/PageNav";
import styles from "./Product.module.scss";
import image from "./../assets/images/about.jpg";

function About() {
    return (
        <div className={styles.product}>
            <PageNav />
            <section>
                <img
                    src={image}
                    alt="about image"
                />
                <div>
                    <h2>About this project</h2>
                    <p>
                        In this project, important React concepts such as the
                        Context API, state management, the use of the Leaflet
                        library and how it works, as well as SPA (Single Page
                        Application) concepts have been utilized.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;
