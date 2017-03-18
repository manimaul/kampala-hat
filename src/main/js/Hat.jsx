'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import Footer from './Footer'
import Blip from './Blip'
import BlipSection from './BlipSection'
import Hero from './Hero'
import Menu from './Menu'
import HatConstants from './Constants'
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';


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

        let blip3 = <Blip heading={HatConstants.themeTitle}
                          imageUrl="images/afh.jpg"
                          message={HatConstants.themeMessage}/>;

        const params = {v: '3.exp', key: "AIzaSyBOX9XrM2tES7DCVpt9hAW036HN-Co_2Bw"};

        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>
                <BlipSection title="Kampala, Uganda Hack-A-Thon Event"
                             blips={[blip3]}/>

                <div className="container standard_margin">
                    <h1>May 26-28, 2017</h1>

                    <h3>Where:</h3>
                    <p>InnovationVillage - 3rd Floor Ntinda Complex Plot 33 Ntinda Road</p>
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

                    <h3>Schedule:</h3>
                    <li>Evening Introduction: May 26 5:30PM</li>
                    <li>All Day Hack-A-Thon Day 1 May 27</li>
                    <li>All Day Hack-A-Thon, Demos and Awards Day 2 May 28</li>

                    <h3>Team Requirements:</h3>
                    <li>Contestants must be residents of Uganda</li>
                    <li>Contestants must have their own laptop</li>
                    <li>We suggest to keep the team size 2-5 people</li>
                    <li>Power and WIFI will be provided for all contestants</li>
                    <li>All Teams must submit a registration and be accepted in order to attend</li>
                    <br/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScAIRui7_M3tofR7PWilAZgJSiTABN5WzzrlsS0lH6cOmC31w/viewform"
                       target="_blank">
                        <button type="button" className="btn btn-danger navbar-btn">TEAM REGISTRATION</button>
                    </a>

                    <h3>Project Requirements:</h3>
                    <li>All entry code must be publicly submitted to <a href="https://github.com/">GitHub</a></li>
                    <li>Entries must be published with an <a href="https://opensource.org/licenses">OSI-approved open
                        source license</a>.
                    </li>
                    <li>Entries must include a mobile component (iOS, Android or Responsive Web)</li>
                    <li>Any <a href="https://opensource.org/licenses">OSI-approved open source licensed </a>
                        libraries and or frameworks may be used.
                    </li>
                    <li>All entries must be developed during the event (not before).</li>

                    <h3>Theme Information:</h3>
                    <p>{HatConstants.themeBlurb}</p>

                    <h3>Prizes:</h3>
                    <li>1st - TBD</li>
                    <li>2nd - TBD</li>
                    <li>3rd - TBD</li>

                </div>
                <h1>&nbsp;</h1>
                <Footer/>
            </div>
        )
    }
}