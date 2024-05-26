import styles from "./contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <section className={styles.contact_section} id="contact">
        <div className={styles.contact_bg}>
          <div className={styles.contact_area}>
            <h1>Contact Us</h1>
            <div className={styles.contact_container}>
              <h2>LET’S GROW TOGETHER</h2>
              <div className={styles.contact_card}>
                <div>
                  <MdEmail className={styles.contact_card_icons} size={30} />
                  <a href="mailto:sparkdigitalsolutions01@gmail.com">
                    <p>sparkdigitalsolutions01@gmail.com</p>
                  </a>
                </div>
                <div>
                  <FaPhone className={styles.contact_card_icons} size={30} />
                  <p>+2348114901234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
