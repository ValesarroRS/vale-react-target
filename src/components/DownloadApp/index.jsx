import React from "react";
import device from "assets/icons/i6.png";
import play from "assets/icons/play.svg";
import appStore from "assets/icons/appstore.svg";
import social from "assets/icons/Social.svg";
import styles from "./index.module.scss";

const DownloadApp = () => {
  return (
    <>
      <img className={styles.i6} src={device} alt="device" />
      <img className={styles.play} src={play} alt="playButton" />
      <img className={styles.appStore} src={appStore} alt="appStore" />
      <img className={styles.social} src={social} alt="social" />
    </>
  );
};

export default DownloadApp;
