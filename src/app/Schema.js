import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.youtubetomp4downloader.com/",
              },
              headline: "YouTube to MP4 Downloader",
              description:
                "Mp4 Downloader provides convenience for you to easily get any of your favourite YouTube videos downloaded into MP4 format. This online tool lets you download from YouTube for free of cost. Yt to mp4 conversion is offered with a seamless experience with no annoying pop-ups. This online tool provides exceptional download speed and gives a high-quality output for your downloads. This mp4 converter gives you the option with a lot of resolutions and sizes to choose from for converting and downloading content. Some of the ranges include 4K, HD quality, 1080p, 720p, 480p, and 320p.",
              image: "",
              author: {
                "@type": "Organization",
                name: "mp4-downloader",
                url: "https://www.youtubetomp4downloader.com/",
              },
              publisher: {
                "@type": "Organization",
                name: "mp4-downloader",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.youtubetomp4downloader.com/",
                },
              },
              datePublished: "",
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
