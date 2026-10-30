"use client";

import {
  Bars3BottomRightIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  RectangleStackIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentArrowDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const RightSideDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open Navbar"
        type="button"
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

  const navLinks = [
    { href: "/", label: "Home", Icon: HomeIcon },
    { href: "/about", label: "About", Icon: InformationCircleIcon },
    { href: "/experience", label: "Experience", Icon: BriefcaseIcon },
    { href: "/projects", label: "Projects", Icon: RectangleStackIcon },
    {
      href: "/Mohammed_Arshad_Resume.pdf",
      label: "Resume",
      Icon: DocumentArrowDownIcon,
      external: true,
    },
    {
      href: "/contact",
      label: "Contact Me",
      Icon: ChatBubbleOvalLeftEllipsisIcon,
    },
  ];

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto h-screen w-screen max-w-xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <DialogTitle className="sr-only">Navigation menu</DialogTitle>
                    <div className="flex h-full flex-col bg-gray-50 dark:bg-gray-800 shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-20 p-4">
                          <div className="flex border-b border-gray-600 py-2 justify-between items-center">
                            <Link
                              onClick={() => setOpen(false)}
                              href="/"
                              className="flex items-center gap-4"
                            >
                              <Image
                                src="/logo.png"
                                className="h-12 w-12 rounded-full object-cover"
                                alt=""
                                height={434}
                                width={533}
                              />
                              <span className="font-semibold">
                                Mohammed Arshad
                              </span>
                            </Link>
                            <button
                              type="button"
                              aria-label="Close navigation menu"
                              onClick={() => setOpen(false)}
                              className="rounded-md p-1 transition hover:bg-slate-200 dark:hover:bg-slate-700"
                            >
                              <XMarkIcon className="w-6 md:w-10" />
                            </button>
                          </div>

                          <nav aria-label="Mobile">
                            <ul className="flex flex-col items-center gap-6">
                              {navLinks.map(({ href, label, Icon, external }) => (
                                <li key={href} className="flex w-full justify-center">
                                  <Link
                                    onClick={() => setOpen(false)}
                                    className={`${linkStyles} ${
                                      isCurrentPage(href)
                                        ? "text-sky-900 dark:text-sky-500"
                                        : ""
                                    }`}
                                    href={href}
                                    aria-current={isCurrentPage(href) ? "page" : undefined}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}
                                  >
                                    <Icon aria-hidden className="w-5" />
                                    {label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>

                          <nav aria-label="Social profiles">
                            <ul className="flex flex-wrap items-center justify-center gap-4">
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  url="https://www.linkedin.com/in/mohammed-arshad-67920b213/"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  url="https://twitter.com/Arshaaaaaaaaaad"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  url="mailto:arshadchowdhury46@gmail.com"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  url="https://www.facebook.com/arshad.chowdhury23/"
                                />
                              </li>
                              <li>
                                <SocialIcon
                                  className="scale-90"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  url="https://github.com/ArshadChowdhury"
                                />
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
