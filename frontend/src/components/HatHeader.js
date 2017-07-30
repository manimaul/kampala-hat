import React from 'react';

export default class HatHeader extends React.Component {

    render() {
        return (
            <div className="container standard_margin">
                <h1>Kampala, Uganda Hack-A-Thon</h1>
                <div className="row">
                    <div className="col-md-4 double_margin_bottom">
                        <h4>Community, Competition, Discovery</h4>
                        <img alt="" className="img-responsive" src="images/afwh.jpg"/>
                    </div>
                    <div className="col-md-4 double_margin_bottom">
                        <h4>Team Building</h4>
                        <p>We are exploring the possibility of building a mobile focused, high performance developer
                            team
                            in Kampala, Uganda that is focused on lean & XP practices, continuous improvement, continual
                            delivery, and test driven development. We are hosting a hack-a-thon to be able to engage
                            the developer community and research this idea.</p>
                        <p>Please join us <strong>May 26-28, 2017</strong> at <strong>Innovation Village</strong> in
                            Kampala, Uganda - East Africa.</p>
                    </div>
                    <div className="col-md-4 double_margin_bottom">
                        <h4>Hack-A-Thon Theme: &quot;Mobile First&quot;</h4>
                        <p>Traditionally applications were developed for the desktop and later adapted to mobile as an
                            after thought. Today, that trend has inverted. With 1.2 billion mobile devices, it isn't
                            merely a trend, niche or something in the future. <strong>Mobile is the present.</strong>
                        </p>
                        <p>The theme of this Hack-A-Thon is &quot;Mobile First&quot;. Lets see what you can build
                            for &quot;Mobile First&quot; as an iOS app, Android app or Responsive Web App.</p>
                        {this.props.button}
                    </div>
                </div>
            </div>
        )
    }
}