import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { t } from "i18next";
import { img } from "../../assets";
import styled from "styled-components";
import styles from "./Navbar.module.css";
import { ImLinkedin2 } from "react-icons/im";
import { BsGithub, BsFacebook, BsTelegram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import DarkMood from "../../common/DarkMood";

const Navbar = ({ handleOnclick, location }) => {
  const [open, setOpen] = useState(false);

  const openMenu1 = {
    transform: open ? " rotate(45deg)" : " rotate(0)",
  };
  const openMenu2 = {
    transform: open ? "translateX(-100%)" : "translateX(0)",
    opacity: open ? 0 : 1,
  };
  const openMenu3 = {
    transform: open ? " rotate(-45deg)" : " rotate(0)",
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 993px)",
  });

  return (
    <>
      <div className={`menuTM ${styles.menuTM}`}>
        <ul onClick={() => setOpen(!open)}>
          <li style={openMenu1}></li>
          <li style={openMenu2}></li>
          <li style={openMenu3}></li>
        </ul>
      </div>

      <Show open={open}>
        {isDesktopOrLaptop ? (
          <nav
            open={open}
            location={location.pathname}
            className={`nav ${styles.nav} ${location.pathname === "/" ? styles.cssRight : styles.cssLeft
              }`}
          >
            <button className={styles.theme}>
              <DarkMood />
            </button>
            <figure className={styles.profile}>
              <img src={img.avatar} alt="profile" />
            </figure>
            <h2>{t("name")}</h2>

            <ul className={styles.socials}>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100010411248791"
                  target="_blank"
                  rel="noreferrer">
                  <BsFacebook />
                </a>
              </li>

              <li>
                <a href="https://t.me/mdalireza021" target="_blank" rel="noreferrer">
                  <BsTelegram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-reza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImLinkedin2 />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/mdalireza021"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>

              <li>
                <a
                  href="https://leetcode.com/mdalireza021/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>

            <ul className={styles.menu}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("aboutme")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("skills")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("projects")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("contact")}
                </NavLink>
              </li>
            </ul>
            <div className={styles.btns}>
              <button value="en" onClick={handleOnclick} />
              <button value="ko" onClick={handleOnclick} />
            </div>
          </nav>
        ) :

          (
            <nav open={open} location={location.pathname} className={`nav ${styles.nav}`}>
              <button className={styles.theme}>
                <DarkMood />
              </button>

              <figure className={styles.profile}>
                <img src={img.avatar} alt="profile" />
              </figure>
              <h2>{t("name")}</h2>
              <ul className={styles.socials}>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100010411248791"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/mdalireza021" target="_blank" rel="noreferrer">
                    <BsTelegram />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/muhammad-ali-reza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImLinkedin2 />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/mdalireza021"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/mdalireza021/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiLeetcode />
                  </a>
                </li>
              </ul>
              <ul className={styles.menu}>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    {t("home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/aboutme"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    {t("aboutme")}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/skills"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    {t("skills")}
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>

              <div className={styles.btns}>
                <button value="en" onClick={handleOnclick}></button>
                <button value="ko" onClick={handleOnclick}></button>
              </div>
            </nav>
          )}
      </Show>
    </>
  );
};

export default Navbar;

const Show = styled.div`
  @media (max-width: 768px) {
    nav {
      right: ${(props) => (props.open ? "0" : "-305px")};
    }
  }
`;
