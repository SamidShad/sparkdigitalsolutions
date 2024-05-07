import styles from "./home.module.css";

function Home() {
  return (
    <>
      <section className={styles.home_section} id="home">
        <div className={styles.bg_image}>
          <div>
            <h1>Empowering Digital Success</h1>
            <a href="#contact">
              <button className="btn">Get Started</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
