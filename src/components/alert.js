import React from "react";
import Icon from "./icon";

export default function alert() {
  return (
    <div className="alert-Container">
      <div className="alert">
        <span className="msg">Copied to clipboard!!</span>
        <span className="icon">
          <Icon.Nice />
        </span>
      </div>
    </div>
  );
}
