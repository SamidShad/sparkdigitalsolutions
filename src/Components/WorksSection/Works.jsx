import styles from "./works.module.css";

function Works() {
  return (
    <>
      <section className={styles.works_section} id="works">
        <div className={styles.section_effect_area}>
          <div className="bg_effect"></div>
          <div className="bg_effect"></div>
          <div className={styles.check_works_card}>
            <h1>SEE WORKS</h1>
            <a
              href="https://drive.google.com/drive/folders/13qNa2JaGzrQ-UxNC1oTyIg-Fb6eEJHnz"
              target="_blank"
            >
              <button className="btn">Get Accesess</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
