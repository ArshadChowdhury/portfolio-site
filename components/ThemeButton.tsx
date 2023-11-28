"use client";

import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ComputerDesktopIcon,
  SunIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  function currentTheme() {
    switch (theme) {
      case "system":
        return (
          <>
            <ComputerDesktopIcon className="w-4" />
          </>
        );

      case "light":
        return (
          <>
            <SunIcon aria-hidden="true" className="w-4" />
          </>
        );

      case "dark":
        return (
          <>
            <MoonIcon aria-hidden="true" className="w-4" />
          </>
        );

      default:
        return (
          <>
            <ComputerDesktopIcon aria-hidden="true" className="w-4" /> System
          </>
        );
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          role="button"
          aria-label="Current Theme"
          className="inline-flex w-full justify-center gap-2 items-center rounded bg-black/30 dark:bg-black/20 p-3 text-sm font-medium text-white hover:bg-black/40 dark:hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          {currentTheme()}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  role="button"
                  aria-label="System Theme"
                  onClick={() => {
                    setTheme("system");
                    toast.success("System theme is selected");
                  }}
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex items-center gap-2 w-full rounded-md px-2 py-2 text-sm`}
                >
                  <ComputerDesktopIcon aria-hidden="true" className="w-4" />
                  System
                  {theme === "system" ? (
                    <CheckIcon className="w-5 ml-auto" aria-hidden="true" />
                  ) : null}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  role="button"
                  aria-label="Light Theme"
                  onClick={() => {
                    setTheme("light");
                    toast.success("Light theme is selected");
                  }}
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <SunIcon aria-hidden="true" className="w-4" />
                  Light
                  {theme === "light" ? (
                    <CheckIcon className="w-5 ml-auto" aria-hidden="true" />
                  ) : null}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  role="button"
                  aria-label="Dark Theme"
                  onClick={() => {
                    setTheme("dark");
                    toast.success("Dark theme is selected");
                  }}
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <MoonIcon aria-hidden="true" className="w-4" />
                  Dark
                  {theme === "dark" ? (
                    <CheckIcon className="w-5 ml-auto" aria-hidden="true" />
                  ) : null}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ThemeButton;
