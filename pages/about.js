// pages/about.js
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Hariprasath's Portfolio</title>
        <meta name="description" content="Learn more about Hariprasath's background and experience." />
        <meta property="og:title" content="About | Hariprasath's Portfolio" />
        <meta property="og:description" content="Learn more about Hariprasath's background and experience." />
        <meta property="og:url" content="https://its-hariprasath-portfolio.vercel.app/about" />
        <meta property="og:type" content="website" />
      </Head>
      <div>About content goes here</div>
    </>
  );
};

export default AboutPage;
