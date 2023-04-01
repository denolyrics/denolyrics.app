export default function Head() {
  // @ts-ignore
  const DOMAIN =
    process.env.NODE_ENV === "production"
      ? "https://www.denolyrics.com"
      : "http://localhost:3000";

  const description =
    "Have you ever wished you could easily save the text of an audio so you can review it later? Well, now it's possible thanks to Notion!.";
  return (
    <>
      <title>Notion integration</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#180821" />
      <meta property="og:title" content="DenoLyrics | Pricing" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={DOMAIN} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DOMAIN} />
      <meta name="twitter:creator" content="@denolyrics" />
      <meta name="twitter:title" content="DenoLyrics | Pricing" />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://www.denolyrics.com/preview.png"
      />
      <meta name="robots" content="all" />

      <meta
        name="keywords"
        content="web application, Audio to Text with AI, Integration with Notion"
      />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <link rel="icon" href="/denolyrics.svg" type="image/svg" />
      <meta
        property="og:image"
        content="https://www.denolyrics.com/preview.png"
      />
    </>
  );
}
