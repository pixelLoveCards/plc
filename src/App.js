import React from "react";
import {HashRouter, Route} from "react-router-dom";
import "./App.scss";

import Header from "./components/global/Header";
import Hero from "./components/global/Hero";
import Footer from "./components/global/Footer";
import SocialBLock from "./components/global/Social-block";
import FeaturedDaily from "./pages/Featured-daily";
import Cards from "./pages/Cards";
import About from "./pages/About";
import Arhiva from "./pages/Arhiva";

export default class App extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <HashRouter basename="/plc">
                <div>
                    <Header/>
                    <Route exact path="/" component={Hero}/>
                    <Route path="/daily" component={FeaturedDaily}/>
                    <Route path="/cards" component={Cards}/>
                    <Route path="/about" component={About}/>
                    <Route path="/arhiva" component={Arhiva}/>
                    <SocialBLock/>
                    <Footer lastUpdate="3.02.2021"/>
                </div>
            </HashRouter>
        );
    }
}
