//sets up the reusable FriendCard component
import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

  <div className="imgDivDiv" onClick={props.imageClick}>

    <div className="imgDiv">

      <img className="image" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />

    </div>
    
  </div>
);

export default FriendCard;