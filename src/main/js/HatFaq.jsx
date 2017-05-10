'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import Footer from './Footer'
import Hero from './Hero'
import Menu from './Menu'
import HatConstants from './Constants';
import HatTabs from './HatTabs'

export default class HatFaq extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onInfoWindowCloseClick() {
        let state = {
            marker_info: this.createMarker(),
        };
        this.setState(state);
    }

    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>
                <div className="double_margin_bottom"/>
                <HatTabs routeName={HatConstants.routeHatFaq}/>

                <div className="container">
                    <h1>Hack-A-Thon FAQ</h1>

                    <ol>
                        <li><strong>What is a Hack-A-Thon?</strong></li>
                    <p>Hack-A-Thons have long been staple events in the Technology Industry since the late 1990s. A
                        Hack-A-Thon is an intense event that brings together technologists such as software
                        developers, graphic designers and user interface specialists along with industry process experts
                        and professionals to identify issues and create software solutions, usually within a
                        weekend.</p>

                    <li><strong>I am interested in knowing what happens in the Hack-A-Thon but don’t have the skills to qualify
                        as a participant. Am I allowed to just attend the Hack-A-Thon and watch what happens there?</strong></li>
                    <p>Unfortunately, we shall not have audiences of non-participants. We shall live stream the opening
                        and closing Sessions of the event</p>

                    <li><strong>Who owns the intellectual property rights of the APPs that will be developed at The Mobile
                        First App Hack-A-Thon?</strong></li>
                    <p>The team that develops the project is the owner of the project. Unlike many hack-a-thons where the primary interest is in the idea, we are primarily interested in the code quality and skill of the contestants to produce a quality product. Therefore all hack-a-thon contestant entry code must be openly published on Github. </p>

                        <li><strong>Are the teams expected to stay together if they win after the challenge?</strong></li>
                    <p>We will not enforce the team composition after the event. It is up to the team to choose to stay
                        together or change members, based on what they see best. The dynamics of the team or the startup
                        thereafter will not be managed by MADRONA.</p>

                        <li><strong>How fair will these awards be? Won’t there be cheating and favoritism?</strong></li>
                    <p>No, an independent panel of judges will score the participant entries based on a non-bias scoring mechanism to determine the final
                        winning teams.</p>

                        <li><strong>Who are the organizers of The Mobile First App Hack-A-Thon?</strong></li>
                    <p>The Mobile First App Hack-A-Thon is organized by MADRONA software in partnership with General UI
                        and AIR SAVE Uganda</p>

                        <li><strong>Can I pitch an already developed APP?</strong></li>
                    <p>No, all entry code must be publicly submitted to GitHub during the course of the hack-a-thon (not before). Entries must include a mobile component (iOS, Android or
                        Responsive Web).</p>

                        <li><strong>Can I use libraries and which ones?</strong></li>
                        <p>Yes, please do. Any OSI-approved open source licensed libraries and or frameworks may be used.</p>
                    </ol>
                    <img className="img-responsive" src="images/mfht.jpg"/>
                </div>
                <Footer/>
            </div>
        )
    }
}