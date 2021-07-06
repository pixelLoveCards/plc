// Two Column Cards
import React from "react";
import Card from "./Card";


export default class TwoColumnCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {cards} = this.props;

        return (
            <div className="two-column-cards">
                {cards.map((card, index) => (
                    <Card key={index}
                          imgSRC={card.image}
                          imgALT={card.imgALT}
                          // openModal={openModal}
                          hasEllipsis={card.hasEllipsis}
                          charLimit={card.charLimit}
                          cardText={card.text}
                          cardTags={card.cardTags}
                    />
                ))}
            </div>
        );
    }
}
