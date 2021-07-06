// FeaturedDaily
import React from "react";
import Featured from "../components/Featured";
import FeaturedThreeCol from "../components/Featured-three-col";
import featuredDailyData from "../data/featured-daily-data";
import featuredDailyCurrentData from "../data/featured-daily-current-data";

export default class FeaturedDaily extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className="section-m">
                <h1 className="page-title">Motivație & Inspirație</h1>
                <Featured
                    image={featuredDailyCurrentData.image}
                    imgALT={featuredDailyCurrentData.imgALT}
                    text={featuredDailyCurrentData.text}

                />
                <div className="featuredDaily__secondary">
                    <FeaturedThreeCol cards={featuredDailyData} />
                </div>
            </section>
        );
    }
}
