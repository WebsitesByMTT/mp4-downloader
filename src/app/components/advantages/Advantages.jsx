import React from "react";
import styles from "./advantages.module.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    desc: "YouTube Converter mp4 supports browser conversions from any device like a PC, Android, or iPhone.",
  },
  {
    id: 2,
    desc: "The process for conversion and downloading is free.",
  },
  {
    id: 3,
    desc: "YouTube Premium needs a subscription and account registration after paying. But this online tool needs no registration as a requirement.",
  },
  {
    id: 4,
    desc: "You can have unlimited video-length conversions and downloads done",
  },
  {
    id: 5,
    desc: "Unlimited download frequency is offered by this tool.",
  },
  {
    id: 6,
    desc: "There is no need to install any software to get things done on this tool.",
  },
];

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.container}>
        <h3>Key Features</h3>

        <ul>
          {data.map((list, index) => (
            <li key={list.id}>
              <h4>{list.heading}</h4>
              <p>{list.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
