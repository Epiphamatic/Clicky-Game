//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (

	<header className = "header">

		<h1> Weird Animal Clicker Game </h1>

		<h2>Clicking on an image gives you a point, but if you click it again you lose. Remember which ones you chose and pick all 12 to win!</h2>
		
	</header>
);

export default Jumbotron;