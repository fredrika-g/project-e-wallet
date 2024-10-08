import CardPreview from "../CardPreview/CardPreview";
import AddCardForm from "../AddCardForm/AddCardForm";

import validateInputs from "../../helpers/inputHelper";

import { useState } from "react";

function AddCardWrapper() {
  const [provider, setProvider] = useState("Visa");
  const [cardNumber, setCardNumber] = useState("1234567891011121");
  const [cardHolder, setCardHolder] = useState("John Smith");
  const [expiresMonth, setExpiresMonth] = useState("01");
  const [expiresYear, setExpiresYear] = useState("25");
  const [ccv, setCCV] = useState(123);

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
