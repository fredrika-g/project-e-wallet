import styles from "./CardInfoForm.module.css";

import cardProviders from "../../data/cardProviders";

import { useState } from "react";

function CardInfoForm({ handleAction, editFields, card, error }) {
  //   local states to handle form inputs
  const [cardNumber, setCardNumber] = useState(card.cardNumber);
  const [cardHolder, setCardHolder] = useState(card.cardHolder);
  const [expiresMonth, setExpiresMonth] = useState(card.expiresMonth);
  const [expiresYear, setExpiresYear] = useState(card.expiresYear);
  const [ccv, setCCV] = useState(card.ccv.toString());
  const [provider, setProvider] = useState(card.provider);

  //   setting states on input change
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

  return (
    <>
      <form className={styles.cardInfoForm}>
        <div className={styles.formField}>
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            type="text"
            id="cardHolder"
            required
            value={cardHolder}
            onChange={(e) => {
              editFields("cardHolder", e.target.value);
            }}
          />
          {error?.cardHolder && (
            <span className={styles.error}>{error.cardHolder}</span>
          )}
        </div>

        <div className={styles.formField}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            maxLength="16"
            value={cardNumber}
            required
            onChange={(e) => {
              editFields("cardNumber", e.target.value);
            }}
          />
          {error?.cardNumber && (
            <span className={styles.error}>{error.cardNumber}</span>
          )}
        </div>

        <div className={styles.formFieldGroup}>
          <div>
            <label htmlFor="expires">Valid Through:</label>
            <div className={styles.formDateInput}>
              <select
                name="expires"
                id="expiresMonth"
                defaultValue={expiresMonth}
                onChange={(e) => {
                  setExpiresMonth(e.target.value);
                }}
              >
                <option value="MM" disabled>
                  MM
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <input
                type="text"
                name="expires"
                id="expiresYear"
                value={expiresYear}
                onChange={(e) => {
                  setExpiresYear(e.target.value);
                }}
              />
            </div>
            {error?.expires?.month && (
              <span className={styles.error}>{error.expires.month}</span>
            )}
            {error?.expires?.year && (
              <span className={styles.error}>{error.expires.year}</span>
            )}
          </div>
          <div className={styles.formField}>
            <label htmlFor="ccv">CCV:</label>
            <input
              type="text"
              id="ccv"
              maxLength="3"
              value={ccv}
              required
              onChange={(e) => {
                setCCV(e.target.value);
              }}
            />
            {error?.ccv && <span className={styles.error}>{error.ccv}</span>}
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="provider">Provider:</label>
          <select
            id="provider"
            defaultValue={provider}
            onChange={(e) => {
              setProvider(e.target.value);
            }}
          >
            <option value="Provider" disabled>
              Provider
            </option>
            {cardProviders &&
              cardProviders.map((cp, i) => {
                return <option key={i}>{cp.name}</option>;
              })}
          </select>
          {error?.provider && (
            <span className={styles.error}>{error.provider}</span>
          )}
        </div>

        <button
          onClick={() =>
            handleAction("save", {
              provider,
              cardHolder,
              cardNumber,
              expiresMonth,
              expiresYear,
              ccv,
            })
          }
          type="button"
        >
          Save Changes
        </button>
      </form>
    </>
  );
}

export default CardInfoForm;
