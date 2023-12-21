import "./globals.css";
import { Inter, Poppins, Nunito, Bungee } from "next/font/google";
import React from "react";

import { GlobalContextProvider } from "./Context/store";
// import BGMusic from "./components/BGMusic";

const font = Bungee({ subsets: ["latin"], weight: "400" });
// const font = Inter({ subsets: ["latin"] });
// const font = Poppins({ subsets: ["latin"], weight: "500" });
// const font = Nunito({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Object Hunt",
  description: "Object Hunt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body
        suppressHydrationWarning={true}
        className={font.className}
        data-theme="light"
      >
        {/* <BGMusic /> */}
        {/* <div className="mx-auto h-screen overflow-hidden xl:w-1/4 lg:w-1/3 md:w-3/4 sm:w-3/5 "> */}
          <div className="rounded-lg mx-auto h-screen overflow-hidden xl:w-1/4 lg:w-1/3 md:w-3/4 sm:w-3/5 so bg-base border-2 border-secondary">
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </div>
        {/* </div> */}
      </body>
    </html>
  );
}
// sm:m-auto sm:w-3/12 md:w-1/4