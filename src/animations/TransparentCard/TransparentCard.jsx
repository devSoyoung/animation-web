import React from "react";
import Card from "./Card";
import "./TransparentCard.scss";

const cardData = {
    bankName: "Bank Name",
    title: "Debit Card",
    number: "1234 5678 9012 3456",
    valid: "10/23",
    name: "soyoung lee",
    ccv: 132
};

function TransparentCard() {
    return (
        <section className="transparent-card">
            <Card {...cardData} />
            <Card {...cardData} />
        </section>
    );
}

export default TransparentCard;
