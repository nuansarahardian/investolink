import React, { useState } from "react";

const Card = () => {
    const cards = [
        {
            id: 1,
            title: "Card 1",
            content: "Detail tentang Card 1",
            images: "images/bps.png",
        },
        {
            id: 2,
            title: "Card 2",
            content: "Detail tentang Card 2",
            images: "images/asean.png",
        },
        {
            id: 3,
            title: "Card 3",
            content: "Detail tentang Card 3",
            images: "bps.png",
        },
    ];

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar Kiri: Daftar Card */}
            <div
                style={{
                    width: "30%",
                    padding: "10px",
                    borderRight: "1px solid #ccc",
                }}
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => handleCardClick(card)}
                        style={{
                            padding: "10px",
                            margin: "10px 0",
                            border: "1px solid #000",
                            cursor: "pointer",
                        }}
                    >
                        {card.title}
                    </div>
                ))}
            </div>

            {/* Kontainer Kanan: Detail Card */}
            <div style={{ width: "70%", padding: "20px" }}>
                {selectedCard ? (
                    <div>
                        <h2>{selectedCard.title}</h2>
                        <p>{selectedCard.content}</p>
                        <img src={selectedCard.images} alt="cek" />
                    </div>
                ) : (
                    <p>Pilih sebuah card untuk melihat detailnya</p>
                )}
            </div>
        </div>
    );
};

export default Card;
