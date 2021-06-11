import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="A streaming platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* navbar */}
      <NavBar />
      {/* results */}
    </div>
  );
}
