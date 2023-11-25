import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const ContactMe = () => (
  <section className="p-10 flex flex-col gap-4 items-center text-center my-10">
    <h3 className="text-3xl">Contact me on other platforms</h3>
    <p className="flex justify-center flex-wrap">
      <span>&nbsp;&bull;&nbsp; Infinite Learner</span>
      <span> &nbsp;&bull;&nbsp; Tech Alchemist </span>
      <span> &nbsp;&bull;&nbsp; Always ready for challenges</span>
    </p>
    <nav>
      <ul className="flex flex-wrap items-center gap-4">
        <li>
          <SocialIcon
            className="hover:scale-125"
            target="_blank"
            url="https://twitter.com/Arshaaaaaaaaaad"
          />
        </li>
        <li>
          <SocialIcon
            className="hover:scale-125"
            target="_blank"
            url="https://www.facebook.com/arshad.chowdhury23/"
          />
        </li>
        <li>
          <SocialIcon
            className="hover:scale-125"
            target="_blank"
            url="https://github.com/ArshadChowdhury"
          />
        </li>
        <li>
          <SocialIcon
            className="hover:scale-125"
            target="_blank"
            url="https://github.com/arshad-repliq"
          />
        </li>
        <li>
          <SocialIcon
            className="hover:scale-125"
            target="_blank"
            url="mailto:arshadchowdhury46@gmail.com"
          />
        </li>
        <li>
          <SocialIcon
            className="hover:scale-125"
            target="_blank"
            url="https://www.linkedin.com/in/mohammed-arshad-67920b213/"
          />
        </li>
      </ul>
    </nav>
  </section>
);

export default ContactMe;
