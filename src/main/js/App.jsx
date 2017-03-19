'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Footer from './Footer';
import Blip from './Blip';
import BlipSection from './BlipSection';
import Hero from './Hero';
import Menu from './Menu';
import Hat from './Hat';
import HatHeader from './HatHeader';
import HatConstants from './Constants';

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

        let btn = <Link to={HatConstants.routeHat} href="">
            <button type="button" className="btn btn-danger navbar-btn">HACK-A-THON INFO</button>
        </Link>;

        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>
                <HatHeader button={btn} />
                <h1>&nbsp;</h1>
                <Seattle/>
                <BlipSection title="We are a creative software studio in Seattle, Washington."
                             blips={[blip1, blip2]}/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path={HatConstants.routeHat} component={Hat}/>
    </Router>
), document.getElementById('content'));