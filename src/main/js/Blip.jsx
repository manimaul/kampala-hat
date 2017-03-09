'use strict';

import React from 'react';

export default class Blip extends React.Component {

    constructor(props) {
        super(props);
        this.imageUrl = props.imageUrl;
        this.heading = props.heading;
        this.message = props.message;
        this.button = props.button;
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    getRenderedImage() {
        if (this.imageUrl) {
            return (
                <div className="media-left media-middle">
                    <img className="media-object" src={this.imageUrl}/>
                </div>
            )
        }
    }

    getMessage() {
        if (this.message) {
            return (
                <div>{this.message}</div>
            )
        }
    }

    getButton() {
        if (this.button) {
            return (
                <div>{this.button}</div>
            )
        }
    }

    render() {
        return (
            <div className="media">
                {this.getRenderedImage()}
                <div className="media-body">
                    <h4 className="media-heading">{this.heading}</h4>
                    {this.getMessage()}
                    {this.getButton()}
                </div>
            </div>
        )
    }
}