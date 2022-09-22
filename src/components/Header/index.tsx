import EthereumLogo from "images/ethereum-logo.png";
import IPFSLogo from "images/ipfs-logo.png";
import ReactLogo from "images/react-logo.png";
import TruffleLogo from "images/truffle-logo.png";
import styles from "./styles.module.scss";

const Header = () => (
    <header className={styles["header"]}>
        <div className={styles["header__title"]}>
            Project made to show that files can be stored in a distributed file system and their hashes in the blockchain with some basic metadata.
        </div>
        <div className={styles["header__subtitle"]}>Following technologies have been used: Solidity, IPFS, Truffle, React(UI)</div>
        <div className={styles["header__images"]}>
            <img src={EthereumLogo} alt="Ethereum logo" />
            <img src={IPFSLogo} alt="IPFS logo" />
            <img src={TruffleLogo} alt="Truffle logo" />
            <img src={ReactLogo} alt="React logo" />
        </div>
    </header>
);

export default Header;
