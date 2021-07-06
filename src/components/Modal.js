// Featured
import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    closeModal() {
        let modal = document.querySelector(".modal");
        modal.classList.remove("isOpen");

        let body = document.querySelector("body");
        body.classList.remove("modal-triggered");
    }

    // openModal() {
    //     let modal = document.querySelector(".modal");
    //     modal.classList.add("isOpen");
    //
    //     let body = document.querySelector("body");
    //     body.classList.add("modal-triggered");
    // }

    render() {
        const {image, imgALT, text} = this.props;

        return (
            <div className="modal">
                <div  className="modal__wrapper">
                    <i className="fas fa-times close-modal" onClick={this.closeModal}></i>
                    <div className="modal__content">
                        <div>
                            <img src={image} alt={imgALT}/>
                        </div>
                        <div className="modal__content--text">{text}</div>
                    </div>
                </div>
            </div>
        );
    }
}
