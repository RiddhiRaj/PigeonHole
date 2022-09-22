import FPLogo from "images/fp-logo.png";
import styles from "./styles.module.scss";

const Footer = () => (
    <footer className={styles["footer"]}>
        <img src={FPLogo} alt="FP logo" />
        <span>Made by Team PigeonHole ©️ 2022</span>
    </footer>
);

export default Footer;
