import { Inter } from "next/font/google";

import MainHeader from "@/components/main-header/main-header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CulinaryCommunity",
  description:
    "This is a community of people who like to try different tastes from around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        <div className="md:container mx-auto my-8">
          <div className="mx-24">{children}</div>
        </div>
      </body>
    </html>
  );
}
