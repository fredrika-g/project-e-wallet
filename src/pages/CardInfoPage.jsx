import { useLocation, useParams } from "react-router-dom";

// redux toolkit
import { useSelector } from "react-redux";

import CardInfoWrapper from "../components/CardInfoWrapper/CardInfoWrapper";

function CardInfoPage() {
  let theme = useSelector((store) => store.settings.theme);

  const cards = useSelector((store) => store.cards.cards);
  let location = useLocation();

  let params = useParams();

  let card;

  if (location.state?.card) {
    card = location.state.card;
  } else {
    card = cards.find((c) => c.id === Number(params.id));
  }

  return (
    <>
      <div className={theme}>{card && <CardInfoWrapper card={card} />}</div>
    </>
  );
}

export default CardInfoPage;
