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
    console.log(validation);

    if (validation.hasErrors) {
      setError(validation.errors);
    } else {
      dispatch(addCard(inputs));
      // redirecting to startpage on success
      navigate("/");
    }
  }

  return (
    <main>
      <h2>Nytt kort</h2>
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
