import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function ButtonMobile({title}) {
    return (
        <div className={styles.btn__container}>
            <button className={styles.mobile__btn__container_btnStyles}><a href="https://docs.google.com/forms/d/e/1FAIpQLSeDZMFjRwh8-hHfuHTJ20z9IssEF2r3A1UO5lmdEvnXaB9ZuQ/viewform?usp=send_form" style={{color: "white", fontSize: "20px", fontWeight: 660, }}>{title}</a></button>
        </div>
    );
}