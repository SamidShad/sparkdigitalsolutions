import styles from "./footer.module.css";
import footerLogo from "../../../public/favicon.png";

function footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logo_container}>
          <img src={footerLogo} alt="footerImage" />
          <div>
            <span>Spark Digital</span>
            <span>Solutoins</span>
          </div>
        </div>
        <ul>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#works">
              <li>Works</li>
            </a>
          </ul>
        </ul>
      </footer>
    </>
  );
}

export default footer;
