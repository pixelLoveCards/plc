// Love
import React from "react";
import TwoColumnCards from "../../components/Two-column-cards";
import SelectInput from "../../components/Select-input";
import loveData from "../../data/love-data";

export default class Love extends React.Component {
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
                    label: "Pentru ea",
                    value: "pt-ea"
                },
                {
                    label: "Pentru el",
                    value: "pt-el"
                },
                {
                    label: "Aniversare",
                    value: "aniversare"
                },
                {
                    label: "Cuplu",
                    value: "cuplu"
                }
            ],
            cardsData: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.getFilteredList = this.getFilteredList.bind(this);
    }

    componentDidMount() {
        this.setState({
            cardsData: loveData
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
                    <h2 className="section__title">Iubire, Căsătorie & Aniversare</h2>
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
