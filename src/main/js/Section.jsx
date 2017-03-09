'use strict';

import React from 'react';
import LazyLoad from 'react-lazyload';


export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.message = props.message;
        this.imgUrl1 = props.imgUrl1;
        this.imgUrl2 = props.imgUrl2;
        this.isDark = props.isDark == true;
        this.blips = props.blips
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    imageRender(imageUrl) {
        if (imageUrl) {
            return (
                <div className="col-xs-6 col-md-4">
                    <LazyLoad height={"100%"}>
                        <img className="img-responsive" src={imageUrl}/>
                    </LazyLoad>
                </div>
            )
        }
    }

    render() {
        return (
            <div className={this.isDark ? "dark_dark_layer" : ""}>
                <div className="container standard_margin">
                    <div className={"row" + (this.isDark ? " standard_margin_top_bottom" : "")}>
                        <div className="col-xs-6 col-md-4">
                            <h1>{this.title}</h1>
                            <p>{this.message}</p>
                        </div>
                        {this.imageRender(this.imgUrl1)}
                        {this.imageRender(this.imgUrl2)}
                    </div>
                </div>
            </div>
        );
    }
}