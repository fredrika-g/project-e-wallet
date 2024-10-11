import PreviewCard from "../PreviewCard/PreviewCard";
import CardActionButtons from "../CardActionButtons/CardActionButtons";
import CardInfoForm from "../CardInfoForm/CardInfoForm";

import validateInputs from "../../helpers/inputHelper";

import { deleteCard, activateCard, updateCard } from "../../redux/cardSlice";

import { useDispatch } from "react-redux";

// react router
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CardInfoWrapper({ card }) {
  let dispatch = useDispatch();

  let navigate = useNavigate();

  //   local state to show error messages
  const [error, setError] = useState("");

  // helper functions

  function handleAction(action, inputs) {
    if (action === "delete") {
      dispatch(deleteCard(card.id));
      navigate("/");
    }

    if (action === "activate") {
      dispatch(activateCard(card.id));
      navigate("/");
    }

    if (action === "save") {
      handleSave(inputs);
    }
  }

  function handleSave(inputs) {
    // checking for validation of inputs
    let validation = validateInputs(inputs);

    if (validation.hasErrors) {
      setError(validation.errors);
    } else {
      // if validation successful, update state
      dispatch(updateCard({ id: card.id, ...inputs, active: false }));
      //   redirect after completion
      navigate("/");
    }
  }

  return (
    <>
      <CardActionButtons handleAction={handleAction} />
      <PreviewCard {...card} />
      <CardInfoForm handleAction={handleAction} card={card} error={error} />
    </>
  );
}

export default CardInfoWrapper;
