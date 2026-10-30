"use client";

import { useTheme } from "next-themes";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ComputerDesktopIcon,
  SunIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const options = [
  { value: "system", label: "System", Icon: ComputerDesktopIcon },
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
] as const;

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  // `theme` is undefined until next-themes has mounted, so the first client
  // render matches the server render.
  const current = options.find((option) => option.value === theme) ?? options[0];
  const CurrentIcon = current.Icon;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        aria-label="Change colour theme"
        className="inline-flex items-center justify-center gap-2 rounded bg-black/30 p-3 text-sm font-medium text-white hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 dark:bg-black/20 dark:hover:bg-black/70"
      >
        <CurrentIcon aria-hidden className="w-4" />
      </MenuButton>
      <MenuItems
        transition
        className="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-black/5 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:bg-slate-800 dark:ring-white/10"
      >
        {options.map(({ value, label, Icon }) => (
          <MenuItem key={value}>
            <button
              type="button"
              onClick={() => {
                setTheme(value);
                toast.success(`${label} theme activated`);
              }}
              className="group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-900 data-[focus]:bg-sky-600 data-[focus]:text-white dark:text-slate-100"
            >
              <Icon aria-hidden className="w-4" />
              {label}
              {theme === value ? (
                <CheckIcon aria-hidden className="ml-auto w-5" />
              ) : null}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default ThemeButton;
