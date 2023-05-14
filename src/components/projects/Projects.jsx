import React, { useState } from "react";
import styles from "./Projects.module.css";
import { t } from "i18next";
import { motion } from "framer-motion";
import { PortfoliosData } from "../../data/PortfoliosData";
import FilterBtn from "./FilterBtn";
import ProjectsItem from "./ProjectsItem";

const Portfolio = () => {
  const [works] = useState(PortfoliosData);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.div
      // layout
      initial={{ opacity: 0, transform: "translateX(-50%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(0%)" }}
      transition={{ duration: 0.8 }}
      className={`portfolio ${styles.portfolio}`}
    >
      <div>
        <h1>{t("projects")}</h1>

        <div>
          <FilterBtn
            works={works}
            setFilterWork={setFilterWork}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <ProjectsItem filterWork={filterWork} />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;