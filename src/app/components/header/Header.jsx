import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Button from "../button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav>
          <Link href={`/`}>
            <div className={styles["image-container"]}>
              <Image
                src={"/logo.svg"}
                fill
                className={styles.image}
                alt="logo"
              />
            </div>
          </Link>
        </nav>
        <main>
          <div className={styles.titles}>
            <h1>YouTube to MP4 Downloader</h1>
            <h2>Convert YouTube to MP4 instantly</h2>
            <Button />
            <Image
              src={"/mp4.svg"}
              width={200}
              height={100}
              className={styles[`mp3-img`]}
              alt="mp3"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Header;
