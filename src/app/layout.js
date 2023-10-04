import Schema from "./Schema";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube to MP4 Downloader: Convert YouTube to MP4 instantly  ",
  description:
    "YouTube to MP4 Downloader makes it easy to watch videos offline. Now download YouTube video for free using this video converter online tool.",

  openGraph: {
    title: "YouTube to MP4 Downloader: Convert YouTube to MP4 instantly  ",
    description:
      "YouTube to MP4 Downloader makes it easy to watch videos offline. Now download YouTube video for free using this video converter online tool.",
    url: "https://www.youtubeparty.com/mp-4-downloader",
    type: "website",
    image: "https://www.youtubeparty.com/main-logo.svg",
  },
  metadataBase: new URL("https://mp4-downloader.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <Schema /> {children}
      </body>
    </html>
  );
}
