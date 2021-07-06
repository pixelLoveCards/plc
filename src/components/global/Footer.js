// Footer
import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { lastUpdate } = this.props;
        return (
            <footer>
                <p>06.07.2021 - {lastUpdate} | Pixel Love Cards</p>
            </footer>
        );
    }
}
