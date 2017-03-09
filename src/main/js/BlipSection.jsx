'use strict';

import React from 'react';


export default class BlipSection extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.blips = props.blips;
        if (this.blips.length >= 4) {
            this.clazzName = "col-xs-6 col-sm-3"
        } else if (this.blips.length >= 3) {
            this.clazzName = "col-xs-6 col-sm-4"
        } else if (this.blips.length >= 2) {
            this.clazzName = "col-xs-6"
        } else {
            this.clazzName = ""
        }

    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    renderBlip(blip, i) {
        if (blip) {
            return (
                <div className={this.clazzName} key={i}>
                    {blip}
                </div>
            )
        }
    }

    render() {
        let thiz = this;
        return (
            <div className="container standard_margin_top_bottom">
                <header><h1 className="blip_section_heading">{this.title}</h1></header>
                <div className="row">
                    {this.blips.map(function (blip, i) {
                        return (thiz.renderBlip(blip, i));
                    })}
                </div>
            </div>
        );
    }
}