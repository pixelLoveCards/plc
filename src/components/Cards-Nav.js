// CardsNav
import React from "react";
import {Route, NavLink, Redirect} from "react-router-dom";
import Birthday from "../pages/cards-subpages/Birthday";
import Love from "../pages/cards-subpages/Love";
import ThankYou from "../pages/cards-subpages/Thank-you";
import Friendship from "../pages/cards-subpages/Friendship";
import Baby from "../pages/cards-subpages/Baby";
import GetWell from "../pages/cards-subpages/Get-well";
import Sympathy from "../pages/cards-subpages/Sympathy";
import NewYear from "../pages/cards-subpages/New-year";

export default class CardsNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isDesktop: true};

        this.updatedWindowDimensions = this.updatedWindowDimensions.bind(this);
        this.handleCategoryScroll = this.handleCategoryScroll.bind(this);
    }

    componentDidMount() {
        this.updatedWindowDimensions();
    }

    updatedWindowDimensions() {
        this.setState({
            isDesktop: window.innerWidth > 786,
        });
        window.addEventListener(
            "resize",
            () => {
                this.setState({
                    isDesktop: window.innerWidth > 786,
                });
            },
            false
        );
    }

    handleCategoryScroll() {

        if(!this.state.isDesktop) {
            const anchor = document.querySelector('.section__title');
            anchor.scrollIntoView();
        }
    }

    render() {
        return (
            <div className="cards-nav">
                <div className="cards-nav__wrapper">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/cards/zi-de-nastere" onClick={this.handleCategoryScroll}>Zi de naștere</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards/multumesc" onClick={this.handleCategoryScroll}>Mulțumire</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards/prietenie" onClick={this.handleCategoryScroll}>Prietenie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards/iubire-casatorie" onClick={this.handleCategoryScroll}>Iubire, Căsătorie & Aniversare</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards/sarcina-bebelus" onClick={this.handleCategoryScroll}>Sarcină & Bebeluș</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards/sa-te-faci-bine" onClick={this.handleCategoryScroll}>Sănătate</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards/simpatie-incurajare" onClick={this.handleCategoryScroll}>Simpatie & Încurajare</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards/anul-nou" onClick={this.handleCategoryScroll}>Anul Nou</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Redirect to="/cards/zi-de-nastere" />
                    <Route path="/cards/zi-de-nastere" component={Birthday}/>
                    <Route path="/cards/multumesc" component={ThankYou}/>
                    <Route path="/cards/prietenie" component={Friendship}/>
                    <Route path="/cards/iubire-casatorie" component={Love}/>
                    <Route path="/cards/sarcina-bebelus" component={Baby}/>
                    <Route path="/cards/sa-te-faci-bine" component={GetWell}/>
                    <Route path="/cards/simpatie-incurajare" component={Sympathy}/>
                    <Route path="/cards/anul-nou" component={NewYear}/>
                </div>
            </div>
        );
    }
}
