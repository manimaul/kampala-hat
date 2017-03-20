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

                <div className="container">

                    <h2>Innovation Village</h2>
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
                    <br />

                    <h2>Fun Focus</h2>
                    <p>Are you interested in developing mobile software in a high performing team focused on lean and XP
                        practices, continuous improvement, continual delivery, and behavior/test driven development? If
                        that's you, join us in the competition for <strong>fun</strong> and<strong> community</strong>.</p>
                    <p>We are looking to build a developer team locally in Kampala. We are specifically interested in
                        engaging developers who have an expertise in mobile software and back end systems.
                        We will be scoring the hack-a-thon based on tenets that we are looking for from our team members.</p>
                    <li>Creativity</li>
                    <li>Collaboration</li>
                    <li>Functionality</li>
                    <li>Mobile Focus</li>
                    <li>Use of Design Patterns</li>
                    <br/>
                    <br />

                    <img className="img-responsive f_img" src="images/team.jpg"/>
                    <br />

                    <h2>Schedule May 26-28, 2017</h2>
                    <li><strong>May 26 5:30PM:</strong> <i>Introduction</i></li>
                    <li><strong>May 27:</strong> <i>Hack-A-Thon Day 1</i></li>
                    <li><strong>May 28:</strong> <i>Hack-A-Thon Day 2, Demos and Awards</i></li>
                    <i>You will be presenting your project in a 10 minute demonstration.</i>
                    <br/>
                    <br />

                    <h2>Contestant Requirements</h2>
                    <li>Power, WIFI, lunch and sports drinks will be provided for all contestants</li>
                    <li>Contestants must have their own laptop</li>
                    <li>Contestants must submit a registration and be accepted in order to attend</li>
                    <br/>

                    <h2>Teams & Individuals</h2>
                    <p>You must register for the hack-a-thon as an individual and may compete as either an individual or as a team.
                    Competing as a team is encouraged but not mandatory. We suggest team sizes between 2 to 5 members.
                    If you do not have a team, you may optionally indicate that you'd like to be placed in one on the registration form.
                    We match you up with others with complementary skill.</p>
                    <br/>

                    <h2>Project Requirements</h2>
                    <p>You will be building a &quot;Mobile First&quot; application as an iOS app, Android app, or Responsive Web App.
                    We are purposefully leaving this open-ended to make room for your creativity. We are interested in you
                    as an individual - what you create gives us perspective on who you are.</p>
                    <li>All entry code must be publicly submitted to <a href="https://github.com/">GitHub</a></li>
                    <li>Entries must be published with an <a href="https://opensource.org/licenses">OSI-approved open
                        source license</a>.
                    </li>
                    <li>Entries must include a mobile component (iOS, Android or Responsive Web)</li>
                    <li>Any <a href="https://opensource.org/licenses">OSI-approved open source licensed </a>
                        libraries and or frameworks may be used.
                    </li>
                    <li>All entries must be developed during the event (not before).</li>
                    <br/>
                    <br/>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScAIRui7_M3tofR7PWilAZgJSiTABN5WzzrlsS0lH6cOmC31w/viewform"
                       target="_blank">
                        <button type="button" className="btn-lg btn-danger navbar-btn">REGISTRATION APPLICATION</button>
                    </a>

                </div>
                <h1>&nbsp;</h1>
                <Footer/>
            </div>
        )
    }
}