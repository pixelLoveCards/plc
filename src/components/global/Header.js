// Header
import React from "react";
import {NavLink} from "react-router-dom";
import LogoImg from "../../assets/resources/images/logo.png";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isDesktop: true};

        this.updatedWindowDimensions = this.updatedWindowDimensions.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
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

    toggleMenu() {
        let menuBtn = document.querySelector(".toggleMenu .fa");
        let menu = document.querySelector("#menu");
        menu.classList.toggle("visible");
        menuBtn.classList.toggle("fa-times");
        menuBtn.classList.toggle("fa-bars");
    }

    handleLinkClick() {
        if(!this.state.isDesktop){
            let menuBtn = document.querySelector(".toggleMenu .fa");
            let menu = document.querySelector("#menu");
            menu.classList.toggle("visible");
            menuBtn.classList.toggle("fa-times");
            menuBtn.classList.toggle("fa-bars");
        }

    }

    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <div className="header__wrapper">
                        <img className="logo-mobile-only" src={LogoImg} alt="Pixel Love Cards Logo"/>
                        <button className="toggleMenu" id="toggle-menu" onClick={this.toggleMenu}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <nav id={`${!this.state.isDesktop ? "menu":""}`}>
                            <img className="logo-large-only" src={LogoImg} alt="Pixel Love Cards Logo"/>
                            <ul className="menu-wrapper">
                                <li>
                                    <NavLink exact to="/" onClick={this.handleLinkClick}>Acasă</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/daily" onClick={this.handleLinkClick}>Motivație</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cards" onClick={this.handleLinkClick}>Felicitări</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={this.handleLinkClick}>Despre Pixel Love Cards</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/arhiva" onClick={this.handleLinkClick}>Arhivă</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
