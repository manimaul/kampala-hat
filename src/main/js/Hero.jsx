'use strict';

import React from 'react'

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.titleImage = props.titleImage;
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    getTitleImage() {
        if (this.titleImage) {
            return (<img className="centered icon" src={this.titleImage}/>)
        }
    }

    render() {
        return (
            <div className="section-hero">
                <div className="dark_layer">
                    <div className="container hero-heading">
                        <h1>&nbsp;</h1>
                        {this.getTitleImage()}
                        <h1>&nbsp;</h1>
                    </div>
                </div>
            </div>
        );
    }
}