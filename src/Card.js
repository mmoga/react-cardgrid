import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div className="col-md-3">
                <img src={this.props.src} alt={this.props.caption} />
                <p>{this.props.caption}</p>
                <img src="https://via.placeholder.com/20x20" alt="heart" />
            </div>
        );
    }
}

export default Card;