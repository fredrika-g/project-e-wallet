import { useSelector } from "react-redux";

import BankCard from "../BankCard/BankCard";

function CardsDisplay() {
  // retrieving global state
  let cards = useSelector((store) => store.cards.cards);

  //   getting the active card
  const activeCard = cards.find((card) => card.active);

  return (
    <>
      <section>
        <h2>Active Card</h2>
        <BankCard {...activeCard} />
        <h2>Inactive Cards</h2>
        {cards &&
          cards.map((card) => {
            if (!card.active) return <BankCard {...card} key={card.id} />;
          })}
      </section>
    </>
  );
}

export default CardsDisplay;
