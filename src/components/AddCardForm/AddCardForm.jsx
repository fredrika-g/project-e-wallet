import styles from "./AddCardForm.module.css";

import cardProviders from "../../data/cardProviders";

function AddCardForm({ editFields, handleSave }) {
  return (
    <>
      <form className={styles.addCardForm}>
        <div className={styles.formField}>
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            type="text"
            id="cardHolder"
            required
            onChange={(e) => {
              editFields("cardHolder", e.target.value);
            }}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            maxLength="16"
            required
            onChange={(e) => {
              editFields("cardNumber", e.target.value);
            }}
          />
        </div>

        <div className={styles.formFieldGroup}>
          <div>
            <label htmlFor="expires">Valid Through:</label>
            <div className={styles.formDateInput}>
              <select
                name="expires"
                id="expiresMonth"
                defaultValue="MM"
                onChange={(e) => {
                  editFields("expiresMonth", e.target.value);
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
                placeholder="YY"
                onChange={(e) => {
                  editFields("expiresYear", e.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="CCV">CCV:</label>
            <input
              type="text"
              id="CCV"
              maxLength="3"
              required
              onChange={(e) => {
                editFields("ccv", e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="provider">Provider:</label>
          <select
            id="provider"
            onChange={(e) => {
              editFields("provider", e.target.value);
            }}
          >
            {cardProviders &&
              cardProviders.map((cp, i) => {
                return <option key={i}>{cp.name}</option>;
              })}
          </select>
        </div>

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </>
  );
}

export default AddCardForm;
