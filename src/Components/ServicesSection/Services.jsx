import styles from "./services.module.css";
import { GrServices } from "react-icons/gr";

function Services() {
  return (
    <>
      <section className={styles.services_section} id="services">
        <div className={styles.services_area}>
          <h1>Our Services</h1>
          <div className={styles.services_cards_area}>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>Digital creator</span>
              </div>
              <p>
                Crafting compelling and original digital content across
                platforms, leveraging creativity and expertise to engage and
                resonate with audiences.
              </p>
            </div>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>YouTube Expert</span>
              </div>
              <p>
                Providing comprehensive solutions for YouTube success, including
                content strategy, channel management, SEO optimization, and
                audience growth strategies.
              </p>
            </div>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>YouTube Content Creator</span>
              </div>
              <p>
                Crafting engaging and tailored content to captivate audiences
                and drive engagement on YouTube channels.
              </p>
            </div>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>YouTube Channel Manager</span>
              </div>
              <p>
                Expertly overseeing and optimizing YouTube channels to maximize
                reach, growth, and audience interaction.
              </p>
            </div>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>Video Editing</span>
              </div>
              <p>
                Skillfully editing videos to enhance quality, storytelling, and
                visual appeal, ensuring content stands out on YouTube.
              </p>
            </div>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>SEO Expert</span>
              </div>
              <p>
                Implementing strategic search engine optimization techniques to
                increase visibility and ranking of YouTube content, driving
                organic traffic.
              </p>
            </div>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>Digital Marketer</span>
              </div>
              <p>
                Leveraging digital platforms and strategies to promote YouTube
                channels, optimize audience targeting, and enhance brand
                presence.
              </p>
            </div>
            <div className={styles.service_cards}>
              <div>
                <GrServices size={50} />
                <span>Channel Promotion</span>
              </div>
              <p>
                Executing targeted promotional campaigns to increase
                subscribers, views, and overall exposure for YouTube channels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
