// Select Input
import React from "react";


export default class SelectInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {selectedOption, sortOption, handleChange} = this.props;

        return (
            <label className="cards-search-box">
                <select
                    className="cards-search-box__select"
                    value={selectedOption}
                    onChange={handleChange}
                >
                    {sortOption.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        );
    }
}
