"use client";

import { useState, useEffect } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const halfHeight = document.documentElement.scrollHeight / 2;

      setShowButton(scrollY > halfHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="fixed right-[5%] bottom-[10%]"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      style={{ display: showButton ? "block" : "none" }}
    >
      <ArrowSmallUpIcon className="w-7 lg:w-10 bg-slate-300 dark:bg-slate-600 blur-xs rounded-full text-gray-600 dark:text-gray-200" />
    </button>
  );
};

export default ScrollToTop;
