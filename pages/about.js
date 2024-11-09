import Head from 'next/head';
import Script from 'next/script';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Hariprasath's Portfolio</title>
        <meta name="description" content="Learn more about Hariprasath's background, skills in web development, and software engineering expertise." />
        
        {/* Keywords Meta Tag */}
        {/* <meta name="keywords" content="Hariprasath R, Sathyamangalam, web developer, software engineer, portfolio, background, experience, front-end developer, back-end developer, full-stack developer, JavaScript, React, Node.js" /> */}

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About | Hariprasath's Portfolio" />
        <meta property="og:description" content="Learn more about Hariprasath's background and experience in software development." />
        <meta property="og:url" content="https://its-hariprasath-portfolio.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Hariprasath's Portfolio" />
        <meta name="twitter:description" content="Explore Hariprasath's journey in software engineering and web development." />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />
      </Head>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hariprasath R",
            "url": "https://its-hariprasath-portfolio.vercel.app/about",
            "image": "https://its-hariprasath-portfolio.vercel.app/og.png",
            "jobTitle": "Full Stack Developer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sathyamangalam",
              "addressCountry": "India"
            },
            "alumniOf": "Your University",
            "sameAs": [
              "https://www.linkedin.com/in/hariprasath", // Update with your actual LinkedIn profile URL
              "https://github.com/hariprasath" // Update with your GitHub profile URL
            ]
          })
        }}
      />
      <div>
        <h1>About Me</h1>
        <p>Learn more about Hariprasath's background and experience.</p>
        {/* Your actual About content goes here */}
      </div>
    </>
  );
};

export default AboutPage;
