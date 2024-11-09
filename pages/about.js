// pages/about.js
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Hariprasath's Portfolio</title>
        <meta name="description" content="Learn more about Hariprasath's background and experience." />
        
      {/* Keywords Meta Tag */}
      <meta name="keywords" content="Hari, Prasath,Hariprasath R, sathyamangalam, web developer, software engineer, portfolio, background, experience, front-end developer, back-end developer, full-stack developer" />


        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About | Hariprasath's Portfolio" />
        <meta property="og:description" content="Learn more about Hariprasath's background and experience." />
        <meta property="og:url" content="https://its-hariprasath-portfolio.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" /> {/* Path to your OG image */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Hariprasath's Portfolio" />
        <meta name="twitter:description" content="Learn more about Hariprasath's background and experience." />

        {/* Robots Meta Tag (optional) */}
        <meta name="robots" content="index, follow" /> {/* or "noindex, nofollow" for non-indexing */}
      </Head>
      <div>
        <h1>About Me</h1>
        <p>Learn more about Hariprasath's background and experience.</p>
        {/* Your actual About content goes here */}
      </div>
    </>
  );
};

export default AboutPage;
