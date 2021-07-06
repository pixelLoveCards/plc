// Hero
import React from "react";
import LogoImg from "../../assets/resources/images/logo.png";

export default class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="hero">
                <div className="hero__wrapper">
                    <div className="hero__container">
                        <div className="hero__overlay">
                            <div className="hero__overlay--wrapper">
                                <div className="hero__logo">
                                    <img src={LogoImg} alt="Pixel Love Cards Logo"/>
                                    <p><small>Să ne trăim credința.</small></p>
                                </div>
                                <div className="hero__text">
                                    <h2>De aceea, încurajați‑vă unii pe alții<br/> și zidiți‑vă unii pe alții,<br/> așa cum, de fapt, și faceți.</h2>
                                    <p><small>1 Tesaloniceni 5:11</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
