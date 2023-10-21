import "./globals.css";
import { Nav } from "@/components";
import type { Metadata } from "next";
import { Oswald, Shrikhand } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--oswald",
  preload: false,
  display: "swap",
});

const shrik = Shrikhand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--shrik",
  preload: false,
  display: "swap",
});
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome my name is Tobi Matilukuro's and this is my Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-brand-background">
        <div
          className={`${oswald.variable} ${shrik.variable} text-brandbase font-oswald 
          text-brand-light-60 overflow-hidden`}
        >
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
