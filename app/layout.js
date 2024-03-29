"use client";
import localFont from "@next/font/local";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const iranSans = localFont({
  src: "../public/fonts/IRAN.woff2",
  variable: "--font-iranSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${iranSans.className}`} dir="rtl">
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
