import React from "react";
import ContactForm from "@/components/ContactForm";
import { SocialIcon } from "react-social-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <section className="flex flex-col items-center gap-6 mt-20 mb-20 lg:mb-10 min-h-screen">
      <h1 className="mt-10 lg:mt-16 mb-4 lg:mb-2 text-2xl lg:text-4xl font-semibold">
        Contact Me
      </h1>{" "}
      <div className="flex flex-col justify-center gap-4">
        <h4 className="text-center font-medium">
          You can contact me in any of these platforms
        </h4>
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-4">
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
      </div>
      <div className="w-full md:w-2/3">
        <div className="w-full">
          <h5 className={"text-lg leading-6 text-center font-medium"}>
            Or, You can fill this form if you wanna just deliver a message
          </h5>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
