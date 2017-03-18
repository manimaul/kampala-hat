'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import Footer from './Footer'
import Hero from './Hero'
import Menu from './Menu'
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import HatHeader from './HatHeader';


export default class Hat extends React.Component {
    constructor(props) {
        super(props);
        this.coords = {
            lat: 0.352839,
            lng: 32.614942
        };
        let marker = this.createMarker();
        this.state = {
            marker_info: marker
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    createMarker() {
        return (<Marker
            lat={this.coords.lat}
            lng={this.coords.lng}
            draggable={false}
            onClick={this.onMarkerClick.bind(this)}/>)
    }

    createInfoWindow() {
        return (
            <InfoWindow
                lat={this.coords.lat}
                lng={this.coords.lng}
                content={'<h6><a href="http://innovationvillage.co.ug/" target="_blank">The Innovation Village</a></h6><p><a href="https://www.google.com/maps/place/The+Innovation+Village+Kampala/@0.3479811,32.6119414,15.96z/data=!4m13!1m7!3m6!1s0x177dbbcd8d1ff9f5:0x8c8395043d8514db!2sNtinda+Rd,+Kampala,+Uganda!3b1!8m2!3d0.3439828!4d32.6165855!3m4!1s0x0:0xdedbf508f023288a!8m2!3d0.3524427!4d32.6148248" target="_blank">Map</a></p>'}
                onCloseClick={this.onInfoWindowCloseClick.bind(this)}/>
        )
    }

    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            draggable: false,
            scaleControl: false,
            panControl: false,
            scrollwheel: false,
            gestureHandling: "none"
        });
    }

    onInfoWindowCloseClick() {
        let state = {
            marker_info: this.createMarker(),
        };
        this.setState(state);
    }

    onMarkerClick() {
        let state = {
            marker_info: this.createInfoWindow(),
        };
        this.setState(state);
    }

    render() {

        const params = {v: '3.exp', key: "AIzaSyBOX9XrM2tES7DCVpt9hAW036HN-Co_2Bw"};

        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>
                <HatHeader/>

                <div className="container standard_margin">

                    <h2>InnovationVillage</h2>
                    <p>3rd Floor Ntinda Complex | Plot 33 | Opposite St. Luke Church – Ntinda
                        <br/>
                        Kampala, Uganda
                    </p>
                    <Gmaps
                        width={'400px'}
                        height={'200px'}
                        lat={this.coords.lat}
                        lng={this.coords.lng}
                        zoom={15}
                        loadingMessage={'Innovation Village Map'}
                        params={params}
                        onMapCreated={this.onMapCreated}>
                        {this.state.marker_info}
                    </Gmaps>

                    <h2>Fun Focus</h2>
                    <p>We're looking to build a developer team locally in Kampala. We are specifically interested in
                        engaging developers who have an expertise in mobile software and back end systems. As a result,
                        we will also be scoring based on categories we would look for when building our team:</p>
                    <li>Creativity</li>
                    <li>Collaboration</li>
                    <li>Functionality</li>
                    <li>Mobile Focus</li>
                    <li>Design Patterns</li>
                    <br/>
                    <p>A good candidate for this hack-a-thon would be individuals interested in developing mobile software
                        in a high performing team. If that's you, join us in the competition for the <strong>fun</strong> and
                        <strong> community</strong>.</p>

                    <img className="img-responsive f_img" src="images/team.jpg"/>

                    <h2>Schedule May 26-28, 2017</h2>
                    <li><i>Introduction:</i> May 26 5:30PM</li>
                    <li><i>Hack-A-Thon Day 1:</i> May 27</li>
                    <li><i>Hack-A-Thon Day 2, Demos and Awards:</i> May 28</li>

                    <h2>Team Requirements</h2>
                    <li>Contestants must have their own laptop</li>
                    <li>We suggest to keep the team size 2-5 people</li>
                    <li>Power and WIFI will be provided for all contestants</li>
                    <li>All Teams must submit a registration and be accepted in order to attend</li>
                    <br/>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScAIRui7_M3tofR7PWilAZgJSiTABN5WzzrlsS0lH6cOmC31w/viewform"
                       target="_blank">
                        <button type="button" className="btn-lg btn-danger navbar-btn">REGISTRATION</button>
                    </a>

                    <h2>Project Requirements</h2>
                    <li>All entry code must be publicly submitted to <a href="https://github.com/">GitHub</a></li>
                    <li>Entries must be published with an <a href="https://opensource.org/licenses">OSI-approved open
                        source license</a>.
                    </li>
                    <li>Entries must include a mobile component (iOS, Android or Responsive Web)</li>
                    <li>Any <a href="https://opensource.org/licenses">OSI-approved open source licensed </a>
                        libraries and or frameworks may be used.
                    </li>
                    <li>All entries must be developed during the event (not before).</li>

                </div>
                <h1>&nbsp;</h1>
                <Footer/>
            </div>
        )
    }
}