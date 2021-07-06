// Recente
import React from "react";
import TwoColumnCards from "../../components/Two-column-cards";
import allCardsData from "../../data/all-cards-data";

export default class Recente extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="cards section-m">
                <TwoColumnCards cards={allCardsData}/>
            </section>
        );
    }
}
