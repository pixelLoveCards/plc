// Baby
import React from "react";
import TwoColumnCards from "../../components/Two-column-cards";
import SelectInput from "../../components/Select-input";
import babyData from "../../data/baby-data";

export default class Baby extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: "toate",
            sortOption: [
                {
                    label: "Toate",
                    value: "toate"
                },
                {
                    label: "Sarcină",
                    value: "sarcina"
                },
                {
                    label: "Nou Născut",
                    value: "bebelus"
                },
                {
                    label: "Părinți",
                    value: "parinti"
                }
            ],
            cardsData: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.getFilteredList = this.getFilteredList.bind(this);
    }

    componentDidMount() {
        this.setState({
            cardsData: babyData
        });
    }

    handleChange(e) {
        if(this.state.selectedOption !== e.target.value) {
            this.setState({
                selectedOption: e.target.value
            });
        }
    }

    getFilteredList() {
        const { cardsData, selectedOption } = this.state;

        if (selectedOption === "toate") {
            return cardsData;
        }
        return cardsData.filter(
            singleCard => singleCard.cardTags === selectedOption
        );
    }

    render() {
        const {sortOption, selectedOption } = this.state;
        const filteredCardsData = this.getFilteredList();

        return (
            <section className="cards section-m">
                <div className="cards-page">
                    <h2 className="section__title">Sarcină & Bebeluș</h2>
                    <SelectInput
                        selectedOption={selectedOption}
                        sortOption={sortOption}
                        handleChange={this.handleChange}/>
                </div>

                <TwoColumnCards cards={filteredCardsData}/>
            </section>
        );
    }
}
