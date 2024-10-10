import PreviewCard from "../PreviewCard/PreviewCard";
import CardActionButtons from "../CardActionButtons/CardActionButtons";

import { deleteCard, activateCard } from "../../redux/cardSlice";

import { useDispatch } from "react-redux";

// react router
import { useNavigate } from "react-router-dom";

function CardInfoWrapper({ card }) {
  let dispatch = useDispatch();

  let navigate = useNavigate();

  function handleAction(action) {
    if (action === "delete") {
      dispatch(deleteCard(card.id));
      navigate("/");
    }

    if (action === "activate") {
      dispatch(activateCard(card.id));
      navigate("/");
    }

    if (action === "save") {
    }
  }
  return (
    <>
      <CardActionButtons handleAction={handleAction} />
      <PreviewCard {...card} />
    </>
  );
}

export default CardInfoWrapper;
