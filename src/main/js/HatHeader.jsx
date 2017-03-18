'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router'
import Blip from './Blip'
import BlipSection from './BlipSection'
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

export default class HatHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div>
                <BlipSection title="Kampala, Uganda &quot;Mobile First&quot; Hack-A-Thon"
                             blips={[
                                 <Blip imageUrl="images/afh.jpg"
                                       message="Madrona Software is hosting an international hack-a-thon event in Kampala, Uganda mid May 2017."
                                       button={this.props.button}/>,
                                 <div><p>Traditionally applications were designed primarily for the desktop leaving mobile as an
                                     afterthought. Today, that trend has flipped. And if you still believe mobile development to be
                                     a niche then you need to change your thinking. With 1.2 billion mobile devices, mobile isn't a
                                     niche or is it merely the future. Mobile is the present.</p></div>]
                             }/>

                <div className="container standard_margin">
                    <p>We're exploring the possibility of building a mobile focused, high performance developer team in
                        Kampala, Uganda. So, we are hosting a hack-a-thon to be able to engage the developer community and
                        research this idea.
                        Please join us <strong>May 26-28, 2017</strong> at <strong>Innovation Village</strong> in Kampala, Uganda.</p>
                </div>

            </div>
        )
    }
}