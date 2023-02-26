export default function Head() {
  // @ts-ignore
  const DOMAIN =
    process.env.NODE_ENV === "production"
      ? "https://www.denolyrics.com"
      : "http://localhost:3000";

  const description =
    "Get text to audio with few clicks through Artificial Intelligence, DenoLyrics is a web application that understands many languages.";
  return (
    <>
      <title>DenoLyrics | Audio to Text with AI</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#180821" />
      <meta property="og:title" content="DenoLyrics" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={DOMAIN} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DOMAIN} />
      <meta name="twitter:creator" content="@denolyrics" />
      <meta name="twitter:title" content="DenoLyrics" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://www.denolyrics.com/preview.png" />
      <meta
        name="keywords"
        content="DenoLyrics, Audio to Text with AI, El Salvador, Get text to audio with few clicks through Artificial Intelligence,web application that understands many languages."
      />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <link rel="icon" href="/denolyrics.svg" type="image/svg" />
      <meta property="og:image" content="https://www.denolyrics.com/preview.png" />
    </>
  );
}
