import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Alike</title>
        <meta name="description" content="A streaming platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* navbar */}
      <NavBar />
      {/* results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
