import React from "react";
import { t } from "i18next";
import styles from "./skills.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
const Skills = () => {

  return (
    <motion.div
      layout
      initial={{ opacity: 0, transform: "translateY(100%)" }}
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      exit={{ opacity: 0, transform: "translateY(0%)" }}
      transition={{ duration: 0.8 }}
      className={`skills ${styles.skills}`}>
      <h1>{t("skillsTwo")}</h1>
      <div className={styles.section}>
        <section className={`languages ${styles.languages}`}>
          <Card />
        </section>
      </div>
    </motion.div>
  );
};

export default Skills;
