"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RandomAdvice = () => {
  const [adviceNumber, setAdviceNumber] = useState("");
  const [adviceText, setAdviceText] = useState("");
  const [disabled, setDisabled] = useState(false);

  const fetchData = async () => {
    setDisabled(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdviceNumber(data.slip.id);
      setAdviceText(data.slip.advice);
    } catch (error) {
      // Handle errors if any
      console.error("Error fetching data:", error);
    } finally {
      // This block will be executed whether the promise is resolved or rejected
      setDisabled(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 my-10">
      <h2 className="text-2xl lg:text-4xl text-center my-3 font-semibold">
        Here&apos;s an advice <br /> by{" "}
        <Link
          target="_blank"
          className="underline text-sky-700 dark:text-teal-500"
          href="https://api.adviceslip.com/"
        >
          Advice Slip
        </Link>
      </h2>
      <div className="dark:bg-gray-700 bg-gray-200 rounded-lg lg:w-4/5 w-full py-6 lg:py-12 flex flex-col items-center justify-center gap-6 lg:gap-14">
        <div className="flex flex-col items-center gap-6 px-6">
          <span className="text-sky-700 font-medium dark:text-teal-500 tracking-widest text-sm lg:text-lg">{`Advice Number : #${
            adviceNumber || "Loading"
          }`}</span>
          <span className="px-4 text-center text-sm lg:text-2xl">{`"${
            adviceText || "Loading"
          }"`}</span>
        </div>
        <div className="relative w-[90%] mx-auto my-8">
          <hr className="w-full border-gray-400" />
          <button
            role="button"
            aria-label="Dice"
            onClick={fetchData}
            disabled={disabled}
            className={`bg-gray-300 hover:bg-sky-400 dark:hover:bg-teal-500 absolute -bottom-7 left-[43.5%] lg:left-[47%] p-3 rounded-full ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <Image width={30} height={30} src="/icon-dice.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RandomAdvice;
