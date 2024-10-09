import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
// import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`pl-9 pr-7 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
