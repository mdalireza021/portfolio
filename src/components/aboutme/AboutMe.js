import React from "react";
import { t } from "i18next";
import { img } from "../../assets";
import styles from "./AboutMe.module.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateX(-100%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
    //className={styles.resume}
    >
      <div className={`resume ${styles.about}`}>
        <h1>{t("aboutme")}</h1>

        <div className={styles.content}>
          <h4>{t("about")}</h4>
        </div>

        <div className={styles.secs}>
          <section className={`education ${styles.education}`}>
            <article className="title">
              <h4>{t("education")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <ul>
              {/*<li>
                <span>{t("educationYearTwo")}</span>
                <strong>{t("educationTitleTwo")}</strong>
                <p>{t("educationTextTwo")}</p>
              </li>
              */}

              <li>
                <span>{t("educationYearOne")}</span>
                <strong>{t("educationTitleOne")}</strong>
                <p>{t("educationTextOne")}</p>
              </li>
            </ul>
          </section>

          <section className={`languages ${styles.languages}`}>
            <article className="title">
              <h4>{t("experience")}</h4>
              <img src={img.zigzag} alt="zigzag" />
            </article>

            <ul>
              <li>
                <span>{t("experienceYearOne")}</span>
                <strong>{t("experienceTitleOne")}</strong>
                <p>{t("experienceTextOne")}</p>
              </li>
              <li>
                <span>{t("experienceYearTwo")}</span>
                <strong>{t("experienceTitleTwo")}</strong>
                <p>{t("experienceTextTwo")}</p>
              </li>

            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
