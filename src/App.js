import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  constructor() {
    super(); //this makes sure that the app becomes a component
    this.state = {
      cards: [
        {
          src: "https://via.placeholder.com/150x150",
          caption: "some things and stuff",
          isLiked: true
        }, 
        {
          src: "https://via.placeholder.com/150x150",
          caption: "some other things and stuff",
          isLiked: false
        }
      ]
    }
  }
  render() {
    const { cards } = this.state;
    const CardGrid = cards.map((card, index) => <Card key={index} 
                                                  src={card.src} 
                                                  caption={card.caption} 
                                                  isLiked={card.isLiked} />)
    return (
      <div className="container">
        <h1>CardGrid</h1>
        {/* iteration to make a bunch of cards */}
        <div className="row">
        { CardGrid }
        </div>
      </div>
    );
  }
}

export default App;
