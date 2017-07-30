'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

export default class About extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="container standard_margin">
                <h1>We are a creative software studio in Seattle, Washington.</h1>
                <div className="row">
                    <div className="col-md-6 double_margin_bottom">
                        <h4>Mobile and Cross Platform Software</h4>
                        <p>Madrona Software has been creating software since 2008. We have our roots in a mobile, cross
                            platform and GIS. Mobile and responsive web is where we started, not merely where
                            we've landed. We are pioneers of this brave new mobility centered digital frontier. Let us
                            help you accomplish your goals as you set out to harness the power of digital mobility.</p>
                    </div>
                    <div className="col-md-6 double_margin_bottom">
                        <h4>GIS Software</h4>
                        <p>Madrona Software got it's start creating geographic information system (GIS) and navigation
                            software. GIS is such an important aspect of of everyone's life as it lets us analyze,
                            visualize, question, and interpret data to understand relationships, patterns, and trends
                            around us.</p>
                    </div>
                </div>
            </div>
        )
    }
}