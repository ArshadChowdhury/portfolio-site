"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

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
      aria-label="Scroll to top"
      className="fixed bottom-[10%] right-[5%] rounded-full bg-slate-300 p-2 shadow-md transition hover:bg-sky-200 dark:bg-slate-700 dark:hover:bg-slate-600 lg:p-3"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      style={{ display: showButton ? "block" : "none" }}
    >
      <ArrowUpIcon className="w-7 md:w-8 blur-xs text-gray-600 dark:text-gray-200" />
    </button>
  );
};

export default ScrollToTop;
