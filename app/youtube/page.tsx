import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arshad's Youtube",
};

const YoutubePage = () => (
  <div className="flex flex-col items-center gap-6 mt-20 lg:mb-10">
    <h1 className="mt-10 lg:mt-16 mb-4 lg:mb-10 text-2xl lg:text-4xl font-semibold">
      My Youtube
    </h1>{" "}
  </div>
);
export default YoutubePage;
