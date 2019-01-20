// Import dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import FriendCard from "./components/FriendCard/FriendCard";
import Animal from "./Animal.json";
import "./App.css";

// Sets state to 0 or empty
class App extends Component {

  state = {

    Animal,

    clickedAnimal: [],

    score: 0
  };

//Image click event

  imageClick = event => {

    const currentAnimal = event.target.alt;

    const AnimalAlreadyClicked =

      this.state.clickedAnimal.indexOf(currentAnimal) > -1;

// If you already clicked on an Animal, you lose the game

    if (AnimalAlreadyClicked) {

      this.setState({

        Animal: this.state.Animal.sort(function(a, b) {

          return 0.5 - Math.random();

        }),

        clickedAnimal: [],

        score: 0
      });

        alert("You lose. Play again?");

    // Randomizes images after successful click

    } else {

      this.setState(

        {
          Animal: this.state.Animal.sort(function(a, b) {

            return 0.5 - Math.random();

          }),

          clickedAnimal: this.state.clickedAnimal.concat(

            currentAnimal
          ),

          score: this.state.score + 1
        },

        //Win condition after all 12 are clicked and resets game

        () => {

          if (this.state.score === 12) {

            alert("Yay! You Win!");

            this.setState({

              Animal: this.state.Animal.sort(function(a, b) {

                return 0.5 - Math.random();
              }),

              clickedAnimal: [],
              score: 0
            });
          }
        }
      );
    }
  };


  // Render all components used

  render() {

    return (

      <div>

        <Navbar 
          score={this.state.score}
        />

        <Jumbotron />

        <div className="wrapper">

          {this.state.Animal.map(Animal => (

            <FriendCard
              imageClick={this.imageClick}
              id={Animal.id}
              key={Animal.id}
              image={Animal.image}
            />
          ))}
          
        </div>
      </div>
    );
  }
}
export default App;