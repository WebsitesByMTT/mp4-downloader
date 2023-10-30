import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import styles from "./conclusion.module.scss";

const Conclusion = () => {
  return (
    <div className={styles[`conclusion`]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Conclusion</h3>
          <p>
            Now you can easily get all of your videos and YouTube playlists
            converted and downloaded in mp4 formats to watch on your device at
            any time for free. With this user-friendly browser platform, there
            are no limitations for your downloads. With utmost ease, you can get
            most of the videos converted in a quick span of time. They can be
            downloaded easily straight to your device with your specifications
            of resolution and file size for different formats. Most converts
            that are done are of mp4 downloads. Well, no one says no to watching
            movies, series or videos for free without an internet connection on
            your device. And for that, this browser cum online tool can become
            your friend for life.
          </p>
        </div>
        <div className={styles.right}>
          <Image
            src={`/conculsion.svg`}
            alt="conculsion"
            height={100}
            width={100}
          />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
