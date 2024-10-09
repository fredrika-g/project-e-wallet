import CardPreview from "../CardPreview/CardPreview";
import AddCardForm from "../AddCardForm/AddCardForm";

import validateInputs from "../../helpers/inputHelper";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/cardSlice";

function AddCardWrapper() {
  let dispatch = useDispatch();

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

    let inputs = {
      provider,
      cardNumber,
      cardHolder,
      expiresMonth,
      expiresYear,
      ccv,
    };
    let validation = validateInputs(inputs);
    console.log(validation);

    validation.hasErrors
      ? setError(validation.errors)
      : dispatch(addCard(inputs));
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
