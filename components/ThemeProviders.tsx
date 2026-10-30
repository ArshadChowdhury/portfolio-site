"use client";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
  // CSP nonce for the inline script next-themes injects to avoid a theme flash.
  nonce?: string;
};

const Providers = ({ children, nonce }: Props) => {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system" nonce={nonce}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
