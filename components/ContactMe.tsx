import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const ContactMe = () => (
  <section className="p-10 flex flex-col gap-4 items-center my-10">
    <h3 className="text-3xl">Contact me on Social Media</h3>
    <p>
      &nbsp;&bull;&nbsp; Infinite Learner &nbsp;&bull;&nbsp; Tech Alchemist
      &nbsp;&bull;&nbsp; Always ready for challenges
    </p>
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <SocialIcon
            target="_blank"
            url="https://twitter.com/Arshaaaaaaaaaad"
          />
        </li>
        <li>
          <SocialIcon
            target="_blank"
            url="https://www.facebook.com/arshad.chowdhury23/"
          />
        </li>
        <li>
          <SocialIcon
            target="_blank"
            url="https://github.com/ArshadChowdhury"
          />
        </li>
        <li>
          <SocialIcon target="_blank" url="https://github.com/arshad-repliq" />
        </li>
        <li>
          <SocialIcon
            target="_blank"
            url="mailto:arshadchowdhury46@gmail.com"
          />
        </li>
        <li>
          <SocialIcon
            target="_blank"
            url="https://www.linkedin.com/in/mohammed-arshad-67920b213/"
          />
        </li>
      </ul>
    </nav>
  </section>
);

export default ContactMe;
