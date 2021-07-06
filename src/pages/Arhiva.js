// Cards
import React from "react";
import FeaturedThreeCol from "../components/Featured-three-col";
import allCardsData from "../data/all-cards-data";


export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="section-m">
                <h1 className="page-title">Arhivă</h1>
                <FeaturedThreeCol cards={allCardsData} />
            </section>
        );
    }
}
