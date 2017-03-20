'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Footer from './Footer';
import About from './About'
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
                <About/>
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