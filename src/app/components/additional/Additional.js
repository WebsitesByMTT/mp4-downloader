import React from "react";
import styles from "./additional.module.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    desc: "Download YouTube mp4 formats",
  },
  {
    id: 2,
    desc: "Youtube to MP3",
  },
  {
    id: 3,
    desc: "Tiktok video download",
  },
  {
    id: 4,
    desc: "Instagram reels and video downloaders",
  },
  {
    id: 5,
    desc: "Music downloader",
  },
  {
    id: 6,
    desc: "X (former name: Twitter) )video downloader",
  },
  {
    id: 7,
    desc: "Facebook video downloader",
  },
  {
    id: 8,
    desc: "Threads video downloader",
  },
];

const Additional = () => {
  return (
    <div className={styles.additional}>
      <div className={styles.container}>
        <h3>Additional features offered by Online video converter</h3>
        <h4>
          Some free YouTube downloader also performs multiple functions. YouTube
          video converter like Online Video Converter also offers
        </h4>
        <ul>
          {data.map((list, index) => (
            <li key={list.id}>
              <p>{list.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Additional;
