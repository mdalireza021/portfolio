import React from "react";
import "./layout.css";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import AboutMe from "./aboutme/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import GoTopButton from "../common/GoTopButton";
import { Background } from "../common/Background";

const Layout = ({ handleOnclick }) => {
  const location = useLocation();
  return (
    <section className="layout-container">
      <Navbar
        handleOnclick={handleOnclick}
        location={location}
        key={location.pathname}
      />
      <Background />
      <div
        className={`layout ${location.pathname === "/" ? "layoutRight" : "layoutLeft"
          }`}
      >
        <GoTopButton />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </section>
  );
};

export default Layout;
