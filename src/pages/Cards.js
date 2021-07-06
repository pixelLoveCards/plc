// Cards
import React from "react";
import CardsNav from "../components/Cards-Nav";

export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="section-m">
                    <h1 className="page-title">Felicitări Creștine</h1>
                <CardsNav />
            </section>
        );
    }
}
