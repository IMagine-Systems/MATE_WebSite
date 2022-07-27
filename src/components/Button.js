import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({title}) {
    return (
        <div className={styles.btn__container}>
            <button className={styles.btn__container_btnStyles}><a href="https://docs.google.com/forms/d/e/1FAIpQLSc9NEoU_szjYQf8_fxTgudFc5IfHN5zakfhMUuQQOrpwH_ZjA/viewform" style={{color: "white", fontSize: 16, fontWeight: 660}}>{title}</a></button>
        </div>
    );
}