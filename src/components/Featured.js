// Featured
import React from "react";
import Card from "./Card";

export default class Featured extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {image, imgALT, text} = this.props;
        return (
            <div className="featured section">
                <Card isFeatured={true}
                      imgSRC={image}
                      imgALT={imgALT}
                      cardText={text}/>
            </div>
        );
    }
}
