import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}