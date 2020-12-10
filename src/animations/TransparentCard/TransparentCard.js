import React from "react";
import "./TransparentCard.scss";
import chip from "../../assets/img/chip.png";

function TransparentCard() {
    return (
        <section className="transparent-card">
            <div className="card">
                <div className="face front">
                    <div className="title">
                        <h3 className="debit">Debit Card</h3>
                        <h3 className="bank">Bank Name</h3>
                    </div>
                    <img src={chip} className="chip" alt="card chip"></img>
                    <h3 className="number">0123 4567 8901 2345</h3>
                    <h5 className="valid">
                        <span>Valid<br/>thru</span>
                        <span>10/23</span>
                    </h5>
                    <h5 className="cardHolder">soyoung lee</h5>
                </div>
                <div className="face back">
                    <div className="blackbar"></div>
                    <div className="ccvtext">
                        <h5>Authorized Signature-not valid unless signed</h5>
                        <div className="whiteBar">
                            <div className="ccv">123</div>
                        </div>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TransparentCard;