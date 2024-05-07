import styles from "./about.module.css";

function About() {
  return (
    <>
      <section className={styles.about_section} id="about">
        <div className={styles.about_bg_area}>
          <div>
            <h1>About us</h1>
            <p>
              At SPARK DIGITAL SOLUTIONS, we specialize in empowering creators
              and businesses to thrive in the digital realm. With expertise in
              YouTube content creation, channel management, video editing, SEO
              optimization, digital marketing, and channel promotion, we offer
              tailored solutions to elevate your online presence. Whether you're
              a content creator aiming to expand your reach or a business
              seeking to harness the power of YouTube, we're here to help you
              achieve your goals. Let's collaborate and unlock your full
              potential on the world's largest video platform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
