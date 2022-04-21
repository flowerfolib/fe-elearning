import React from "react";
import styles from "./Share.module.css";
import {
  FacebookMessengerIcon,
  FacebookIcon,
  FacebookShareButton,
  FacebookMessengerShareButton,
} from "react-share";

function Share() {
  const currentLocation = window.location.href;
  return (
    <div >
      <FacebookShareButton
        url={currentLocation}
        quote={"Đào tạo Diligo"}
        hashtag={"#daotao_diligo"}
        description={"aiueo"}
        className="mb-2"
      >
        <FacebookIcon size={48} round /> Chia sẻ lên Facbook
      </FacebookShareButton>
      <br/>
      <FacebookMessengerShareButton url={currentLocation}>
        <FacebookMessengerIcon size={48} round /> Chia sẻ lên Messenger
      </FacebookMessengerShareButton>
    </div>
  );
}

export default Share;
