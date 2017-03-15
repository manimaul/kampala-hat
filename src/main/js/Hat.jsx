'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import Footer from './Footer'
import Blip from './Blip'
import BlipSection from './BlipSection'
import Hero from './Hero'
import Menu from './Menu'
import HatConstants from './Constants'


export default class Hat extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        let blip3 = <Blip heading={HatConstants.themeTitle}
                          imageUrl="images/afh.jpg"
                          message={HatConstants.themeMessage} />;

        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>
                <BlipSection title="Kampala, Uganda Hack-A-Thon Event"
                             blips={[blip3]}/>

                <div className="container standard_margin">
                    <h1>May 24-26, 2017</h1>

                    <h3>Where:</h3>
                    <p>InnovationVillage - 3rd Floor Ntinda Complex Plot 33 Ntinda Road</p>
                    <p>TODO: GMAP</p>

                    <h3>Schedule:</h3>
                    <li>Evening Introduction: May 24 5:00PM</li>
                    <li>All Day Hack-A-Thon Day 1 May 25 6am-5pm</li>
                    <li>All Day Hack-A-Thon Day 2 May 26 6am-4pm</li>
                    <li>Demos and Awards May 26 4pm-7pm</li>

                    <h3>Team Requirements:</h3>
                    <li>Contestants must be residents of Uganda</li>
                    <li>Contestants must have their own laptop</li>
                    <li>We suggest to keep the team size 2-5 people</li>
                    <li>Power and WIFI will be provided for all contestants</li>
                    <li>All Teams must submit a registration and be accepted in order to attend</li>
                    <br/>
                    <Link to={"/kampala_hat_register"} href="">
                        <button type="button" className="btn btn-danger navbar-btn">TEAM REGISTRATION</button>
                    </Link>

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