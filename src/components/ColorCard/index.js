import React from "react";
import "./style.css";

function ColorCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content"></div>
      <span
      // onClick={() => props.handleRemoveFriend(props.id)}
      // className="remove"
      ></span>
    </div>
  );
}

export default ColorCard;
