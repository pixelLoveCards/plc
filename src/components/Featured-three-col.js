// Featured Three Col
import React from "react";
import Card from "./Card";


export default class FeaturedThreeCol extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {cards, openModal} = this.props;

        return (
            <div className="featured-three-col">
                {cards.map((card, index) => (
                    <Card key={index} isThreeCol={true} isFeaturedSmall={card.isFeaturedSmall}
                          imgSRC={card.image}
                          imgALT={card.imgALT}
                          openModal={openModal}
                          hasEllipsis={card.hasEllipsis}
                          charLimit={card.charLimit}
                          cardText={card.text} />
                ))}
            </div>
        );
    }
}
