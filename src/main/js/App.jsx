'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router'
import Footer from './Footer'
import Blip from './Blip'
import BlipSection from './BlipSection'
import Hero from './Hero'
import Menu from './Menu'
import Section from './Section'

class Seattle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="section-seattle">
                <div className="dark_layer">
                    <div className="container hero-heading">
                        <h1>&nbsp;</h1>
                        <h1>&nbsp;</h1>
                        <h1>&nbsp;</h1>
                        <h1>&nbsp;</h1>
                        <h1>&nbsp;</h1>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        let blip1 = <Blip heading="Mobile and Cross Platform Software"
                          message="Madrona Software has been creating software since 2008. We have our
                                          roots in a mobile, cross platform and GIS focus. Mobile and responsive web
                                          is where we started, not merely where we've landed. We are pioneers of this
                                          brave new mobility centered digital frontier. Let us help you accomplish your
                                          goals as you set out to harness the power of digital mobility."/>;

        let blip2 = <Blip heading="GIS Software"
                          message="Madrona Software got it's start creating geographic information system
                                          (GIS) and navigation software. GIS is such an important aspect of of everyone's
                                          life as it lets us analyze, visualize, question, and interpret data to understand
                                          relationships, patterns, and trends around us.."/>;

        let btn = <Link to={"/kampala_hat"} href="">
            <button type="button" className="btn btn-danger navbar-btn">MORE INFO</button>
        </Link>;

        let blip3 = <Blip heading="Theme: Economic Growth And Infrastructure"
                          imageUrl="images/afh.jpg"
                          message="Madrona Software is hosting an international hack-a-thon event in Kampala, Uganda mid
                          May 2017."
                          button={btn}/>;

        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>
                <BlipSection title="Kampala, Uganda Hack-A-Thon Event"
                             blips={[blip3]}/>
                <h1>&nbsp;</h1>
                <Seattle/>
                <BlipSection title="We are a creative software studio in Seattle, Washington."
                             blips={[blip1, blip2]}/>
                <Footer/>
            </div>
        )
    }
}

class Hat extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        let blip3 = <Blip heading="Theme: Economic Growth And Infrastructure"
                          imageUrl="images/afh.jpg"
                          message="Madrona Software is hosting an international hack-a-thon event in Kampala, Uganda mid
                          May 2017."/>;

        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>
                <BlipSection title="Kampala, Uganda Hack-A-Thon Event"
                             blips={[blip3]}/>

                <div className="container standard_margin">
                    <h1>May 24-26, 2017</h1>
                    <h2>Cash Prize for winning team: $TBD</h2>

                    <h3>Where:</h3>
                    <p>InnovationVillage - 3rd Floor Ntinda Complex Plot 33 Ntinda Road</p>
                    <p>TODO: GMAP</p>

                    <h3>Schedule:</h3>
                    <li>Evening Introduction: May 24 5:00PM</li>
                    <li>All Day Hack-A-Thon Day 1 May 25 6am-5pm</li>
                    <li>All Day Hack-A-Thon Day 2 May 26 6am-4pm</li>
                    <li>Demos and Awards May 26 4pm-7pm</li>

                    <h3>Team Requirements:</h3>
                    <li>All contestants must be Ugandan residents</li>
                    <li>All contestants must have their own laptop</li>
                    <li>We suggest to keep the team size 2-5 people</li>
                    <li>Power and WIFI will be provided for all contestants</li>
                    <li>All Teams must submit a registration and be accepted in order to attend</li>
                    <Link to={"/kampala_hat_register"} href=""><button type="button" className="btn btn-danger navbar-btn">TEAM REGISTRATION</button></Link>


                    <h3>Theme Information:</h3>
                    <p>The theme for this Hack-A-Thon is "Economic Growth And Infrastructure". </p>
                    <p>We want to demonstrate innovative technical solutions that solve real problems we face in our</p>
                    <p>economy and infrastructure, as well as demonstrate inventive ways we could use existing
                        technology</p>
                    <p>to enable ambitions for future economic growth.</p>
                    <p>Agriculture, Climate, Consumer, Ecosystems, Education, Energy, Finance, Health, Local
                        Government,</p>
                    <p>Manufacturing, Public Safety, Science and Research, Transportation, GIS and Weather</p>
                </div>
                <h1>&nbsp;</h1>
                <Footer/>
            </div>
        )
    }
}


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/kampala_hat" component={Hat}/>
        <Route path="/contact" component={App}/>
    </Router>
), document.getElementById('content'));