import styles from "./Message.module.scss";
import { BiSolidErrorCircle } from "react-icons/bi";

function Message({ message }) {
    return (
        <p className={styles.message}>
            <span role="img">
                <BiSolidErrorCircle className="icon-error" />
            </span>{" "}
            {message}
        </p>
    );
}

export default Message;
