import styles from "./AddCardForm.module.css";

import cardProviders from "../../data/cardProviders";

function AddCardForm({ editFields, handleSave, error }) {
  return (
    <>
      <form className={styles.addCardForm}>
        <div className={styles.formField}>
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            type="text"
            id="cardHolder"
            required
            placeholder="John Smith"
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
            placeholder="0123456789101112 (16)"
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
            {error?.expires?.month && (
              <span className={styles.error}>{error.expires.month}</span>
            )}
            {error?.expires?.year && (
              <span className={styles.error}>{error.expires.year}</span>
            )}
          </div>
          <div className={styles.formField}>
            <label htmlFor="ccc">CCV:</label>
            <input
              type="text"
              id="ccc"
              maxLength="3"
              placeholder="123"
              required
              onChange={(e) => {
                editFields("ccv", e.target.value);
              }}
            />
            {error?.ccv && <span className={styles.error}>{error.ccv}</span>}
          </div>
        </div>

        <div className={styles.formField}>
          <label htmlFor="provider">Provider:</label>
          <select
            id="provider"
            defaultValue="Provider"
            onChange={(e) => {
              editFields("provider", e.target.value);
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

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </>
  );
}

export default AddCardForm;
