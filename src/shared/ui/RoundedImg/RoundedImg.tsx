import React, { FC } from "react";
import "./RoundedImg.scss";

const RoundedImg: FC<{ src: string }> = (props) => (
  <div className="RoundedImg" data-testid="RoundedImg">
    <img src={props.src} alt="profile-img" />
  </div>
);

export default RoundedImg;
