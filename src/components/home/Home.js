import React from "react";
import { img } from "../../assets";
import styles from "./home.module.css";
import { t } from "i18next";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={`home ${styles.home}`}>
      <img src={img.homeBg} alt="home" />
      <ul>
        <li>
          <p>{t("welcome")} </p>
        </li>
      </ul>
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(2500).deleteAll().start();
          }}
          options={{
            strings: ["Software Engineer","Learner","Swift and clean code enthusiast", "Dreamer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};

export default Home;
