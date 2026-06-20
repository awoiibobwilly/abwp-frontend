import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import "../../styles/shared/backToTop.css";

function BackToTop() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShowButton(window.scrollY > 500);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);


  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };


  return (

    <button

      className={`back-to-top ${
        showButton ? "show" : ""
      }`}

      onClick={scrollToTop}

      aria-label="Back to top"

    >

      <FaArrowUp />

    </button>

  );

}

export default BackToTop;