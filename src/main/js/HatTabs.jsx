'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import HatConstants from './Constants';

export default class HatTabs extends React.Component {
    constructor(props) {
        super(props);
        this.routeName = props.routeName
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    getClassNameForRoute(route) {
        if (route === this.routeName) {
            return "active"
        } else {
            return ""
        }
    }

    renderTab(route, text) {
        return (
            <li role="presentation" className={this.getClassNameForRoute(route)}>
                <Link to={route} href="">{text}</Link>
            </li>
        )
    }

    render() {
        return (
            <div>
                <div className="double_margin_bottom"/>
                <div className="container">
                    <ul className="nav nav-tabs">
                        {this.renderTab(HatConstants.routeHat, "Event Info")}
                        {this.renderTab(HatConstants.routeHatFaq, "FAQ")}
                        {this.renderTab(HatConstants.routeScoring, "Scoring")}
                        {this.renderTab(HatConstants.routeTerms, "Terms")}
                    </ul>
                </div>
            </div>
        );
    }
}