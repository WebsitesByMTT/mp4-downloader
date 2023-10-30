import React from "react";
import styles from "./youtube.module.scss";
import Image from "next/image";

const Youtube = () => {
  return (
    <div className={styles[`website-content`]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src={`/youtube.svg`}
            alt="website-content"
            height={100}
            width={100}
          />
        </div>
        <div className={styles.right}>
          <h3>Youtube</h3>
          <p>
            It is people’s go-to entertainment platform that serves everyone
            regardless of age or gender. Satisfying the needs of kids and
            adults, it holds a variety of content like videos, music, films,
            series, interviews, vlogs, etc. Some videos can be downloaded for
            free for offline watching. However, downloading specific videos can
            only be possible if you have a premium account after getting a
            subscription. But now you can easily download videos using a YouTube
            mp4 converter just by getting URL to mp4 converts for free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
