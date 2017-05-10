'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import HatConstants from './Constants'

export default class Menu extends React.Component {
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
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to={HatConstants.routeHome} href=""><a className="navbar-brand" href="#">MADRONA SOFTWARE</a></Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to={HatConstants.routeHat} href="">KAMPALA HACK-A-THON</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}