import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';

// Components 
import Front from './Front/Front';
import Back from './Back/Back';


export default class FlippingCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {

        const { 
            flippingImageAlt, 
            flippingImage, 
            flippingImageBack ,
            flippingTitle,
            flippingDescription
        } = this.props;

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" infinite="true" flipDirection="horizontal" flipSpeedBackToFront="1.8" flipSpeedFrontToBack="1.8">
                <Front
                    round={this.handleClick}
                    flippingImage={flippingImage}
                    flippingImageAlt={flippingImageAlt}
                />
                <Back
                    flippingImageBack={flippingImageBack}
                    flippingImageAlt={flippingImageAlt}
                    flippingTitle={flippingTitle}
                    flippingDescription={flippingDescription}
                    round={this.handleClick}
                />
            </ReactCardFlip>
        )
    }
}