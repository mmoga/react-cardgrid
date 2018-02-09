import React, { Component } from 'react';


class Card extends Component {
    render() {
        let style;
        if(this.props.isLiked) {
            style = { color: '#ff3333' };
        } else {
            style = { color: 'lightgrey' };
        }
        return (
            <div className="col-md-3 my-4">
                <img src={this.props.src} alt={this.props.caption} />
                <p>{this.props.caption}</p>
                <i className="fa fa-heart" style={style} aria-hidden="true"></i>
            </div>
        );
    }
}

export default Card;