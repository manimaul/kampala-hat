'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Footer from './Footer';
import About from './About'
import Hero from './Hero';
import Menu from './Menu';
import Hat from './Hat';
import HatFaq from './HatFaq';
import HatScoring from './HatScoring'
import HatHeader from './HatHeader';
import HatTerms from './HatTerms';
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

                <div className="bcrumb-color">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="active">Home</li>
                        </ol>
                    </div>
                </div>

                <HatHeader button={btn}/>
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
        <Route path={HatConstants.routeHome} component={App}/>
        <Route path={HatConstants.routeHat} component={Hat}/>
        <Route path={HatConstants.routeHatFaq} component={HatFaq}/>
        <Route path={HatConstants.routeScoring} component={HatScoring}/>
        <Route path={HatConstants.routeTerms} component={HatTerms}/>
    </Router>
), document.getElementById('content'));