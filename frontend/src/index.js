import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Footer from './components/Footer';
import About from './components/About'
import Hero from './components/Hero';
import Menu from './components/Menu';
import Hat from './components/Hat';
import HatFaq from './components/HatFaq';
import HatScoring from './components/HatScoring'
import HatHeader from './components/HatHeader';
import HatTerms from './components/HatTerms';
import HatConstants from './Constants';
import "./css/style.css"
import registerServiceWorker from './registerServiceWorker';

class Seattle extends React.Component {

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

  render() {

    let btn = <Link to={HatConstants.routeHat} href="">
      <button type="button" className="btn btn-danger navbar-btn">HACK-A-THON INFO</button>
    </Link>;

    return (
      <div>
        <Menu/>
        <Hero titleImage={"images/madrona_logo-nq8.png"}/>
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
), document.getElementById('root'));

registerServiceWorker();
