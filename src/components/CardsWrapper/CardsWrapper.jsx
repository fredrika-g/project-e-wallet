import CardsDisplay from "../CardsDisplay/CardsDisplay";

// react router
import { Link } from "react-router-dom";

// redux toolkit
import { useSelector } from "react-redux";

function CardsWrapper() {
  // getting state cards
  let cards = useSelector((store) => store.cards.cards);
  return (
    <>
      <CardsDisplay />
      {/* displaying button if user has less than 4 cards stored */}
      {cards.length < 4 && (
        <Link to="/addcard">
          <button>Add New</button>
        </Link>
      )}
    </>
  );
}

export default CardsWrapper;
