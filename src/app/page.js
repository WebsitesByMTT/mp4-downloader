import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles[`mp4-downloader`]}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>YouTube to MP4 Downloader</h1>
          <h2>Convert YouTube to MP4 instantly</h2>

          <div className={styles[`image-container`]}>
            <Image
              src={`/button.png`}
              fill
              className={styles.image}
              alt="YouTube to MP4 Downloader"
            />
          </div>

          <div id="mouse-scroll" className={styles.mouse}>
            <div className="mouse">
              <div className="mouse-in"></div>
            </div>
            <div>
              <span className="down-arrow-1"></span>
              <span className="down-arrow-2"></span>
              <span className="down-arrow-3"></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.para}>
            <h3>Introduction</h3>
            <p>
              Mp4 Downloader provides convenience for you to easily get any of
              your favourite YouTube videos downloaded into MP4 format. This
              online tool lets you download from YouTube for free of cost. Yt to
              mp4 conversion is offered with a seamless experience with no
              annoying pop-ups. This online tool provides exceptional download
              speed and gives a high-quality output for your downloads. This mp4
              converter gives you the option with a lot of resolutions and sizes
              to choose from for converting and downloading content. Some of the
              ranges include 4K, HD quality, 1080p, 720p, 480p, and 320p.
            </p>
          </div>

          <div className={styles.para}>
            <h3>Youtube</h3>
            <p>
              It is people’s go-to entertainment platform that serves everyone
              regardless of age or gender. Satisfying the needs of kids and
              adults, it holds a variety of content like videos, music, films,
              series, interviews, vlogs, etc. Some videos can be downloaded for
              free for offline watching. However, downloading specific videos
              can only be possible if you have a premium account after getting a
              subscription. But now you can easily download videos using a
              YouTube mp4 converter just by getting URL to mp4 converts for
              free.
            </p>
          </div>
          <div className={styles.para}>
            <h3>How to Convert and Download YouTube Videos</h3>
            <ul>
              <li>
                Open YouTube and find the video you want to download. Copy the
                URL from the browser’s address bar or find the copy link option
                in the share button. Paste the URL in the text input field on
                the online YouTube downloader mp4 tool’s browser page.
              </li>
              <li>
                In the output section, select MP4 as your Output format. Specify
                your required resolution and check for the right file size.
              </li>
              <li>
                Click on the convert button to get the video link converted to
                mp4 format. After the conversion process, you can select the
                download button below to start the download.
              </li>
              <li>
                After clicking download to complete the process, retrieve and
                obtain your converted video mp4 output.
              </li>
            </ul>
          </div>
          <div className={styles.para}>
            <h3>Key Features</h3>
            <ul>
              <li>
                YouTube Converter mp4 supports browser conversions from any
                device like a PC, Android, or iPhone.
              </li>
              <li>The process for conversion and downloading is free.</li>
              <li>
                YouTube Premium needs a subscription and account registration
                after paying. But this online tool needs no registration as a
                requirement.
              </li>
              <li>
                You can have unlimited video-length conversions and downloads
                done
              </li>
              <li>Unlimited download frequency is offered by this tool.</li>
              <li>
                There is no need to install any software to get things done on
                this tool.
              </li>
            </ul>
          </div>
          <div className={styles.para}>
            <h3>Additional features offered by Online video converter</h3>
            <p>
              Some free YouTube downloader also performs multiple functions.
              YouTube video converter like Online Video Converter also offers:
            </p>
            <ul>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                Download YouTube mp4 formats
              </li>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                Youtube to MP3
              </li>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                Tiktok video download
              </li>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                Instagram reels and video downloaders
              </li>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                {" "}
                Music downloader
              </li>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                X (former name: Twitter) )video downloader
              </li>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                Facebook video downloader
              </li>
              <li style={{ listStyle: "circle", marginLeft: "2rem" }}>
                Threads video downloader
              </li>
            </ul>
          </div>
          <div className={styles.para}>
            <h3>Conclusion</h3>
            <p>
              Now you can easily get all of your videos and YouTube playlists
              converted and downloaded in mp4 formats to watch on your device at
              any time for free. With this user-friendly browser platform, there
              are no limitations for your downloads. With utmost ease, you can
              get most of the videos converted in a quick span of time. They can
              be downloaded easily straight to your device with your
              specifications of resolution and file size for different formats.
              Most converts that are done are of mp4 downloads. Well, no one
              says no to watching movies, series or videos for free without an
              internet connection on your device. And for that, this browser cum
              online tool can become your friend for life.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
