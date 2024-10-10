import CardsDisplay from "../CardsDisplay/CardsDisplay";

// react router
import { Link } from "react-router-dom";

function CardsWrapper() {
  return (
    <>
      <CardsDisplay />
      <Link to="/addcard">Add New</Link>
    </>
  );
}

export default CardsWrapper;
