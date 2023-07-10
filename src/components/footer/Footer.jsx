import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 IamBells. All rights reserved.</div>;
      <div className={styles.socials}>
        <Link href="https://www.facebook.com">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icons}
            alt="IamBells"
          />
        </Link>
        <Link href="https://www.instagram.com">
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icons}
            alt="IamBells"
          />
        </Link>
        <Link href="https://www.twitter.com/olami_bells">
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icons}
            alt="IamBells"
          />
        </Link>
        <Link href="https://www.youtube.com">
          <Image
            src="/4.png"
            width={15}
            height={15}
            className={styles.icons}
            alt="IamBells"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
