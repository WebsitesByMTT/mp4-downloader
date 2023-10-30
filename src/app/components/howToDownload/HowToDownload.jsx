import React from "react";
import styles from "./howToDownload.module.scss";
import Image from "next/image";

const howToDownloadData = [
  "Open YouTube and find the video you want to download.",
  "Copy the URL from the browser’s address bar or find the copy link option in the share button. ",
  "Paste the URL in the text input field on the online YouTube downloader mp4 tool’s browser page.",
  "In the output section, select MP4 as your Output format. Specify your required resolution and check for the right file size.",
  "Click on the convert button to get the video link converted to mp4 format. After the conversion process, you can select the download button below to start the download.",
  "After clicking download to complete the process, retrieve and obtain your converted video mp4 output.",
];

const HowToDownload = () => {
  return (
    <>
      <div className={styles.howToDownload}>
        <div className={styles.container}>
          <div className={styles.titles}>
            <h3>How to download a video</h3>
          </div>

          <ul>
            {howToDownloadData.map((list, index) => (
              <li key={index}>
                <Image
                  src={`/youtube-icon.svg`}
                  width={82}
                  height={70}
                  alt="youtube-icon"
                />

                <span>{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HowToDownload;
