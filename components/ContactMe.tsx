import { SocialIcon } from "react-social-icons";

const ContactMe = () => (
  <section className="p-10 flex flex-col gap-6 lg:gap-8 items-center text-center mb-10">
    <div className="flex flex-col gap-2 lg:gap-4">
      <h2 className="text-2xl lg:text-4xl text-center font-semibold">
        Connect with me
      </h2>
      <p className="flex justify-center flex-wrap">
        <span>&nbsp;&bull;&nbsp; Infinite Learner</span>
        <span> &nbsp;&bull;&nbsp; Tech Alchemist </span>
        <span> &nbsp;&bull;&nbsp; Always ready for challenges</span>
      </p>
    </div>
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        <li>
          <SocialIcon
            className="hover:scale-125"
            target="_blank"
            url="https://www.linkedin.com/in/mohammed-arshad-67920b213/"
          />
        </li>
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
            url="mailto:arshadchowdhury46@gmail.com"
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
      </ul>
    </nav>
  </section>
);

export default ContactMe;
