import React from "react";
import device from "../../i6.png";
import play from "../../assets/icons/play.svg";

const DownloadApp = () => {
  return (
    <div className="rightSection section">
      <img id="i6" src={device} alt="device" />
      <img id="play" src={play} alt="playButton" />
      <button id="AppStore" />
      <button id="social" />
    </div>
  );
};

export default DownloadApp;
