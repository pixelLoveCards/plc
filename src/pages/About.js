// About
import React from "react";
import profilePic from "../assets/resources/images/peony.jpg";

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="about section-m">
                {/*<h1 className="page-title">About</h1>*/}
                <div className="about__wrapper">
                    <p>Idea de Pixel Love Cards mi-a venit cândva prin August 2017, mă gândeam atunci să fac doar felicitări
                        creștine pentru diverse ocazii pentru cei apropiați și familie, și să le pun și aici ca alții să le
                        folosească.
                        <br/><br/>Cam peste două luni, prin luna Octombrie, mi-a venit ideea să fac postări zilnice care aveau
                        scopul de a încuraja mersul celor creștini pe această cale îngustă. Am fost inspirata de <a href="https://christianquestions.com/" title="Mergi la linkul Christian Questions" rel="noopener noreferrer" target="_blank">Christian Questions</a>,
                        podcast care l-am urmărit, fiind încurajată, uneori chiar pusă pe gânduri cu privire la
                        viața mea ca creștin.
                        <br/>Am fost foarte plăcut surprinsă când într-o zi, una din surorile mele dragi mi-a trimis una din aceste
                        felicitări, neștiind că chiar eu le-am făcut.
                        <br/><br/>Pregătind materialul pentru fiecare postare, am găsit versete frumoase care zici că le citeam pentru
                        prima dată, chiar dacă nu au fost mulți cei care au reacționat cumva la aceste postări, m-a încurajat gândul
                        că poate cineva doar le citește și se bucură și este încurajat așa cum eram și eu.
                        <br/><br/>Dacă până acuma am avut nevoie unul de celălalt pentru a ne ajuta reciproc și a ne încuraja, acuma în
                        această perioadă când nu ne putem vedea față în față, sau ne vedem mai rar, avem și mai multă nevoie de a
                        comunica, de a avea părtășie, de a ne încuraja, de a ne zidi spiritual, pentru a sta aproape de Domnul.
                        Unii din noi avem tendința de ne izola, de a ne închide, de aceea, mai mult ca oricând trebuie să fim
                        încurajați să ținem, să păstrăm legătura unii cu alții.
                        <br/><br/><i>„Dacă umblăm în lumină, după cum El Însuşi este în lumină, avem părtăşie unii cu alţii.” </i>
                        – 1 Ioan 1:7
                        <br/><br/>La sfârșit vreau să vă salut cu versetul de bază al acestei pagini:  <i> „De aceea, încurajaţi-vă unii pe alţii şi întăriţi-vă unii pe alţii, aşa cum, de fapt, şi faceţi.”</i>
                        – 1 Tesaloniceni 5:11
                        <br/><br/>Să ne trăim credința, și să nu uităm că "<strong>cel ce udă pe alții, va fi udat și el</strong>".
                        <br/><br/>Fiți binecuvântați!<br/> Alina</p>
                    <div>
                        <img src={profilePic} alt="Author of Pixel Love Cards, Alina Năneștean"/>
                    </div>

                </div>
            </section>
        );
    }
}
