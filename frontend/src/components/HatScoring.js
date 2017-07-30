'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import Footer from './Footer';
import Hero from './Hero';
import Menu from './Menu';
import HatTabs from './HatTabs';
import HatConstants from '../Constants';

export default class HatScoring extends React.Component {
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

                <HatTabs routeName={HatConstants.routeScoring}/>

                <div className="container">
                    <h1>Scoring and Presentation</h1>
                    <h3>Overview</h3>
                    <ol>
                        <li>A panel of judges will score all Hack-A-Thon contestant entries based on the &quot;score card&quot; shown below.</li>
                        <li>The top 10 scoring entries will be announced one by one in random order. Each announced top 10 team will present a 10 minute presentation of their project.</li>
                        <li>After all top 10 teams have presented, then the judges will vote on a winner using instant run-off voting.</li>
                    </ol>

                    <h3>Score Card (Subject to Change)</h3>
                    <h5>Code Quality</h5>
                    <ul>
                        <li>1-5 points - separation of concerns</li>
                        <li>1-5 points - use of design patterns</li>
                        <li>1-5 points - use of dependency injection * 1-5 points - use of reactive extensions (http://reactivex.io)</li>
                        <li>1-5 points - consistent style</li>
                        <li>1-5 points - organized (packages, class structure, features)</li>
                        <li>1-5 points - tests</li>
                    </ul>

                    <h5>Creativity</h5>
                    <ul>
                        <li>1-5 points - aesthetic UI</li>

                        <li>1-5 points - unique idea</li>

                        <li>1-5 points - UX usability, simplicity, contextual</li>
                    </ul>

                    <h5>Collaboration</h5>
                    <ul>
                        <li>1 (3 max) point per team member</li>
                        <li>1-5 points - demonstrated teamwork</li>
                        <li>3 points - tooling (use of Trello, Jira, Pivitol Tracker, Team City, etc)</li>
                    </ul>

                    <h5>Functionality & Mobile First</h5>
                    <ul>
                        <li><strong>required</strong> - working prototype that runs on a mobile device</li>
                        <li>7 points - development of custom back-end system (e.g. REST API)</li>
                        <li>10 points - development of IOT component</li>
                    </ul>


                    <h3>Teams and Demo/Presentation Guidelines Teams & Individuals</h3>

                    <p>You must register for the hack-a-thon as an individual and may compete as either an individual or as a team. Competing as a team is encouraged but not mandatory. We suggest team sizes between 2 to 5 members. If you do not have a team, you may optionally indicate that you'd like to be placed in one on the registration form. We match you up with others with complementary skill.</p>

                    <h5>Showcasing/Demo Topics</h5>

                    <p>Note: You have 10 minutes to make your presentation.</p>
                    <ol>
                        <li>Who are you? (Your war cry / slogan – single short sentence)</li>
                        <li>What is your product name? (Why you chose that name)</li>
                        <li>What is your project about? i.e. product purpose & why you’re doing it</li>
                        <li>What platform(s) does your product run on</li>
                        <li>What technology stack did you leverage</li>
                        <li>How your app works. Show your app’s key features and explain the user experience.</li>
                        <li>Unveil the team. (Tell us why you/the team members are the ONES)</li>
                    </ol>

                    <img className="img-responsive" src="images/mfht.jpg"/>
                </div>
                <Footer/>
            </div>
        )
    }
}