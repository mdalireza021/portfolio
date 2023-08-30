import React, { useState } from "react";
import { i18n } from "./i18n";
import Layout from "./components/Layout";

import styled from "styled-components";


//import { ToastContainer } from "react-toastify";

const App = () => {
  const [language, setLanguage] = useState("en");
  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <CommonStyles language={language}>
      <div className="App">
        <Layout handleOnclick={handleOnclick} />

      </div>
    </CommonStyles>
  );
};

export default App;

const CommonStyles = styled.div`
  direction: ${(props) => (props.language === "fa" ? "RTL" : "")};

  .nav,
  .menuTM,
  .home h1,
  .btns {
    direction: ltr !important;
  }

  .nav,
  .home,
  .aboutme,
  .resume,
  .portfolio,
  .contact,
  form input,
  form textarea,
  form button {
    font-family: ${(props) =>
    props.language === "en" ? "'Poppins', sans-serif" : ""};

    font-family: ${(props) =>
    props.language === "ko" ? "'Gowun Dodum', sans-serif" : ""};


  }`;
