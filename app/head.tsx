import { faqs } from "../components/Faq";
import Script from "next/script";

export default function Head() {
  // @ts-ignore
  const DOMAIN =
    process.env.NODE_ENV === "production"
      ? "https://www.denolyrics.com"
      : "http://localhost:3000";

  const description =
    "Get text to audio with few clicks through Artificial Intelligence, DenoLyrics is a web application that understands many languages.";

  const parseLdJson = () => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => {
        return {
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        };
      }),
    };
    return data;
  };  
  return (
    <>
      <title>
        DenoLyrics | Convert Audio to Text with Artificial Intelligence
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#180821" />
      <meta property="og:title" content="DenoLyrics | Audio to Text with AI" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={DOMAIN} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DOMAIN} />
      <meta name="twitter:creator" content="@denolyrics" />
      <meta name="twitter:title" content="DenoLyrics" />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://www.denolyrics.com/preview.png"
      />
      <meta
        name="keywords"
        content="web application,Audio to Text with AI, El Salvador, Convert Audio to Text with Artificial Intelligence"
      />
      <meta name="robots" content="all" />

      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <link rel="icon" href="/denolyrics.svg" type="image/svg" />
      <meta
        property="og:image"
        content="https://www.denolyrics.com/preview.png"
      />

      <Script
        id="faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parseLdJson()) }}
      />
    </>
  );
}
