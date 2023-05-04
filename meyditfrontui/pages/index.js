import Head from "next/head";
import HomePage from "./homepage";

export default function Home() {
   return (
    <>
      <Head>
        <title>Tailor APP</title>
        <meta
          name="description"
          content="A decentralised NFT Auction Application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
        <meta property="og:image" content="/images/svg/logo.svg" />
      </Head>
      <main>
         <HomePage />
      </main>
    </>
  );
}
