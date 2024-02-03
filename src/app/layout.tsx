import "./globals.css";
import { Nav } from "@/components";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "800"],
  variable: "--fira",
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afope Matilukuro - Frontend Developer",
  description: "Welcome my name is Afope Matilukuro's and this is my Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-brand-light">
        <div
          className={`${fira.variable} text-brand-dark-dim font-fira font-light`}
        >
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
