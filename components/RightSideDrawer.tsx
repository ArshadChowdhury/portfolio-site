"use client";

import {
  Bars3BottomRightIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { Dialog, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

// The prop types defind
type Props = {
  open: boolean;
  setOpen: any;
};

const RightSideDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open Navbar"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <Bars3BottomRightIcon className="w-8" />
      </button>
      <NavigationDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </>
  );
};

export default RightSideDrawer;

function NavigationDrawer({ open, setOpen }: Props) {
  const linkStyles = "px-6 py-2 font-semibold flex items-center gap-6 w-2/3";

  const currentPathname = usePathname();

  const isCurrentPage = (pathname: string): boolean =>
    currentPathname === pathname;

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={"div"}
                  enter="transform transition ease-in-out duration-500 sm:duration-1000"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-1000"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen h-screen max-w-xl">
                    <div className="flex h-full flex-col bg-gray-50 dark:bg-gray-800 shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-20 p-4">
                          <div className="flex border-b border-gray-600 py-2 justify-between items-center">
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              href="/"
                              className="flex items-center gap-4"
                            >
                              <Image
                                // style={{ width: "auto", height: "auto" }}
                                src="/logo.png"
                                className="rounded-full w-12 h-12"
                                alt="Logo"
                                height={50}
                                width={50}
                              />
                              <h1>Arshad Chowdhury</h1>
                            </Link>
                            <XMarkIcon
                              onClick={() => setOpen(false)}
                              className="w-6 md:w-10 cursor-pointer"
                            />
                          </div>

                          <div className="flex flex-col items-center gap-6">
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={`${linkStyles} ${
                                isCurrentPage("/")
                                  ? "text-sky-900 dark:text-sky-500"
                                  : ""
                              }`}
                              href={"/"}
                            >
                              <HomeIcon className="w-5" />
                              Home
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={`${linkStyles} ${
                                isCurrentPage("/about")
                                  ? "text-sky-900 dark:text-sky-500"
                                  : ""
                              }`}
                              href={"/about"}
                            >
                              <InformationCircleIcon className="w-5" />
                              About
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={`${linkStyles} ${
                                isCurrentPage("/projects")
                                  ? "text-sky-900 dark:text-sky-500"
                                  : ""
                              }`}
                              href={"/projects"}
                            >
                              <BriefcaseIcon className="w-5" />
                              Projects
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={`${linkStyles} ${
                                isCurrentPage("/Arshad_CV.pdf")
                                  ? "text-sky-900 dark:text-sky-500"
                                  : ""
                              }`}
                              target="_blank"
                              href={"/Arshad_CV.pdf"}
                            >
                              <BookOpenIcon className="w-5" />
                              Resume
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={`${linkStyles} ${
                                isCurrentPage("/services")
                                  ? "text-sky-900 dark:text-sky-500"
                                  : ""
                              }`}
                              href={"/services"}
                            >
                              <WrenchScrewdriverIcon className="w-5" />
                              Services
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={`${linkStyles} ${
                                isCurrentPage("/contact")
                                  ? "text-sky-900 dark:text-sky-500"
                                  : ""
                              }`}
                              href={"/contact"}
                            >
                              <ChatBubbleOvalLeftEllipsisIcon className="w-5" />
                              Contact Me
                            </Link>
                          </div>

                          <nav>
                            <ul className="flex flex-wrap items-center justify-center gap-4">
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  url="https://www.linkedin.com/in/mohammed-arshad-67920b213/"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  url="https://twitter.com/Arshaaaaaaaaaad"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  url="mailto:arshadchowdhury46@gmail.com"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  url="https://www.facebook.com/arshad.chowdhury23/"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  url="https://github.com/ArshadChowdhury"
                                />
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
