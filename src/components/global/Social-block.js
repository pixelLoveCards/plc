// Social BLock
import React from "react";

export default class SocialBLock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="social-block">
                <div className="social-block__wrapper">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/PixelLoveCards"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/pixellovecards/"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
