import styles from "./Navbar.module.css";
import logo from "../../src/mate_logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className={styles.nav} style={{paddingLeft: 140, paddingRight: 130}}>
            <Link to={`/`} style={{ textDecoration: 'none', color: "black"}}>
                <img 
                    src={logo}
                    width='63'
                    height='63'
                    style={{borderRadius: "50%"}}
                />
            </Link>
            <ul className={styles.nav__list}>
                <li>
                    <Link to={`/`} style={{ textDecoration: 'none', color: "black"}}>HOME</Link>
                </li>
                <li>
                    <Link to={`/project`} style={{ textDecoration: 'none', color: "black"}}>PROJECT</Link>
                </li>
                <li>
                    <Link to={`/recruit`} style={{ textDecoration: 'none', color: "black"}}>RECRUIT</Link>
                </li>
                <li>
                    <Link to={`/contact`} style={{ textDecoration: 'none', color: "black"}}>CONTACT</Link>
                </li>
            </ul>
        </div>
    );
}