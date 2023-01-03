import React from "react";
import Head from "next/head";
import { AppHeader } from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>MY PORTFOLIO</title>
        <meta name="description" content="PORTFORIO BY RINO NISHIMURA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="l-container">
        <AppHeader />
        {children}
      </main>
    </>
  );
};

export { AppLayout };
