import styles from "./AddCardWrapper.module.css";

import CardPreview from "../CardPreview/CardPreview";
import AddCardForm from "../AddCardForm/AddCardForm";

import validateInputs from "../../helpers/inputHelper";
import setUniqueID from "../../helpers/setUniqueID";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../redux/cardSlice";

// react router
import { useNavigate } from "react-router-dom";

function AddCardWrapper() {
  let dispatch = useDispatch();

  let cards = useSelector((store) => store.cards.cards);

  let navigate = useNavigate();

  // local states
  const [provider, setProvider] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiresMonth, setExpiresMonth] = useState("");
  const [expiresYear, setExpiresYear] = useState("");
  const [ccv, setCCV] = useState("");

  const [error, setError] = useState("");

  // help set local states
  function editFields(state, value) {
    switch (state) {
      case "provider":
        setProvider(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardHolder":
        setCardHolder(value);
        break;
      case "expiresMonth":
        setExpiresMonth(value);
        break;
      case "expiresYear":
        setExpiresYear(value);
        break;
      case "ccv":
        setCCV(value);
    }
  }

  // handle click on save btn
  function handleSave() {
    setError("");

    // setting unique id
    let id = setUniqueID(cards);

    let inputs = {
      id,
      provider,
      cardNumber,
      cardHolder,
      expiresMonth,
      expiresYear,
      ccv,
      active: false,
    };
    let validation = validateInputs(inputs);

    if (validation.hasErrors) {
      setError(validation.errors);
    } else {
      dispatch(addCard(inputs));
      // redirecting to startpage on success
      navigate("/");
    }
  }

  return (
    <main className={styles.wrapper}>
      <h2>New Card</h2>
      <CardPreview
        editFields={editFields}
        provider={provider}
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        expiresMonth={expiresMonth}
        expiresYear={expiresYear}
      />

      <AddCardForm
        editFields={editFields}
        handleSave={handleSave}
        error={error}
      />
    </main>
  );
}

export default AddCardWrapper;
