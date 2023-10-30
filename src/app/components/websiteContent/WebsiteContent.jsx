import React from "react";
import styles from "./websiteContent.module.scss";
import Image from "next/image";

const WebsiteContent = () => {
  return (
    <div className={styles[`website-content`]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>INTRODUCTION</h3>
          <p>
            Mp4 Downloader provides convenience for you to easily get any of
            your favourite YouTube videos downloaded into MP4 format. This
            online tool lets you download from YouTube for free of cost. Yt to
            mp4 conversion is offered with a seamless experience with no
            annoying pop-ups. This online tool provides exceptional download
            speed and gives a high-quality output for your downloads. This mp4
            converter gives you the option with a lot of resolutions and sizes
            to choose from for converting and downloading content. Some of the
            ranges include 4K, HD quality, 1080p, 720p, 480p, and 320p
          </p>
        </div>
        <div className={styles.right}>
          <Image
            src={`/introduction.svg`}
            alt="introduction"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteContent;
