"use client";

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { Fragment, ReactNode, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";

// The prop types defind
type Props = {
  open: boolean;
  setOpen: any;
};

const RightSideDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <button onClick={() => setDrawerOpen(!drawerOpen)}>
        <Bars3BottomRightIcon className="w-8" />
      </button>
      <NavigationDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </>
  );
};

export default RightSideDrawer;

function NavigationDrawer({ open, setOpen }: Props) {
  const linkStyles = "px-6 py-2 underline font-semibold";
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
                        <div className="flex flex-col gap-10 p-4">
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
                              className={linkStyles}
                              href={"/about"}
                            >
                              About
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={linkStyles}
                              href={"/projects"}
                            >
                              Projects
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={linkStyles}
                              href={"/services"}
                            >
                              Services
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={linkStyles}
                              href={"/youtube"}
                            >
                              YouTube
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              role="link"
                              className={linkStyles}
                              href={"/contact"}
                            >
                              Contact Me
                            </Link>
                            {/* <ThemeButton /> */}
                          </div>
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
