// Card
import React from "react";

import DownloadIcon from "../assets/resources/icons/icon-download.png"

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        let elementsToAdjustParent = document.querySelectorAll(".ellipsisParent");
        for (let i = 0; i < elementsToAdjustParent.length; i++) {
            let elementsToAdjust = elementsToAdjustParent[i].querySelectorAll(".addEllipsis");
            let elementsLength = 0;

            for (let j = 0; j < elementsToAdjust.length; j++) {
                let charLimit = elementsToAdjust[j].getAttribute("char-limit");
                let content = elementsToAdjust[j].innerHTML;

                elementsLength += content.length;
                if (elementsLength > charLimit) {
                    let dif = elementsLength - charLimit;
                    let newLimit = content.length - dif;

                    // add ellipsis
                    let visible = content.substr(0, newLimit);
                    let html = visible + '<span>...</span>';
                    elementsToAdjust[j].innerHTML = html;

                    // remove other siblings if exist
                    if (elementsToAdjust.length > 1) {
                        for (let k = j + 1; k < elementsToAdjust.length; k++) {
                            elementsToAdjustParent[i].removeChild(elementsToAdjust[k])
                        }
                    }
                }
            }
        }
    }

    render() {
        const {imgSRC, imgALT, isFeatured, isThreeCol, cardTags, cardText} = this.props;
        return (
            <div className={`card${isFeatured ? " card--featured" : ""}${isThreeCol ? " card--threeCol" : ""}`}>
                <div className={`card__img`}>
                    {/*{isFeaturedSmall && <i className="openModal fas fa-search-plus" onClick={openModal}></i>}*/}
                    <a className="card__download" href={imgSRC} download title="Descarcă imaginea"><img
                        src={DownloadIcon} alt="Download Button"/></a>
                    <img className="card__img--block" src={imgSRC} alt={imgALT}/>
                </div>
                {cardText && <div className="card__text" dangerouslySetInnerHTML={{ __html: `${cardText}` }}></div>}
            </div>
        );
    }
}
