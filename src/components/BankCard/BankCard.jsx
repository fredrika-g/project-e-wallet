import styles from "./BankCard.module.css";
import Visa from "../CardLogos/Visa";
import MasterCard from "../CardLogos/Mastercard";
import AmericanExpress from "../CardLogos/AmericanExpress";

function BankCard({
  provider,
  cardNumber,
  cardHolder,
  expiresMonth,
  expiresYear,
}) {
  return (
    <>
      <div className={styles.bankCard}>
        <div className={styles.creditCard}>
          <div className={styles.cardProvider}>
            {provider === "Visa" && <Visa />}
            {provider === "MasterCard" && <MasterCard />}
            {provider === "American Express" && <AmericanExpress />}
          </div>
          <div className={styles.cardNumber}>
            {cardNumber ? cardNumber : "0123456789101112"}
          </div>
          <div className={styles.cardHolder}>
            {cardHolder ? cardHolder : "John Smith"}
          </div>
          <div className={styles.cardExpiry}>
            <span>Expires</span>
            <span>
              {(expiresMonth ? expiresMonth : "MM") +
                "/" +
                (expiresYear ? expiresYear : "YY")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankCard;
