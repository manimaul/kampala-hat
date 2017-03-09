'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router'
import Footer from './Footer'
import Section from './Section'
import Hero from './Hero'
import Menu from './Menu'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"} />
                <Section title="Title 1"
                         message="Message 1"
                         isDark={false}/>

                <Section title="Title 2"
                         message="Message 2"
                         isDark={true}/>

                <Section title="Title 3"
                         message="Message 3"
                         isDark={false}/>
                <Footer/>
            </div>
        )
    }
}


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/events" component={App}/>
        <Route path="/contact" component={App}/>
    </Router>
), document.getElementById('content'));