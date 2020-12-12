import React from "react";
import chip from "../../assets/img/chip.png";

function Card({ title, bankName, number, valid, name, ccv }) {
    return (
        <div className="card">
            <div className="face front">
                <div className="title">
                    <h3 className="debit">{title}</h3>
                    <h3 className="bank">{bankName}</h3>
                </div>
                <img src={chip} className="chip" alt="card chip"></img>
                <h3 className="number">{number}</h3>
                <h5 className="valid">
                    <span>
                        Valid
                        <br />
                        thru
                    </span>
                    <span>{valid}</span>
                </h5>
                <h5 className="cardHolder">{name}</h5>
            </div>
            <div className="face back">
                <div className="blackbar"></div>
                <div className="ccvtext">
                    <h5>Authorized Signature-not valid unless signed</h5>
                    <div className="whiteBar">
                        <div className="ccv">{ccv}</div>
                    </div>
                    <p className="text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
