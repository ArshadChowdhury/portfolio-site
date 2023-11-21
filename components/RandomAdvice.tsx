"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const RandomAdvice = () => {
  const [adviceNumber, setAdviceNumber] = useState("");
  const [adviceText, setAdviceText] = useState("");

  const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdviceNumber(data.slip.id);
    setAdviceText(data.slip.advice);

    // var advice_number = document.getElementById("adviceNumber");
    // advice_number.innerText = `ADVICE #${data.slip.id}`;
    // var advice_text = document.getElementById("adviceText");
    // advice_text.innerText = `“${data.slip.advice}”`;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3 className="text-3xl mt-4 font-semibold">
        Here&apos;s an advice for you
      </h3>
      <div className="bg-gray-700 rounded-lg w-full lg:w-[65%] py-12 flex flex-col gap-14">
        <div className="flex flex-col items-center gap-6 px-6">
          <span className="text-teal-500 tracking-widest text-lg">{`Advice Number : #${
            adviceNumber || "Loading"
          }`}</span>
          <span className="px-4 text-center text-2xl">{`"${
            adviceText || "Loading"
          }"`}</span>
        </div>
        <div className="relative w-[90%] mx-auto my-8">
          <hr className="w-full" />
          <div className="bg-gray-200 hover:bg-teal-500 cursor-pointer absolute -bottom-7 left-[49%] lg:left-[46%] p-3 rounded-full">
            <Image
              onClick={fetchData}
              width={30}
              height={30}
              src="/icon-dice.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomAdvice;
