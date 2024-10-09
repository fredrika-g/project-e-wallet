function CardPreview({
  editFields,
  provider,
  cardNumber,
  cardHolder,
  expiresMonth,
  expiresYear,
}) {
  return (
    <section className="bankCard">
      <h3>Preview</h3>

      <div className="credit-card">
        <div className="card-provider">{provider ? provider : "Provider"}</div>
        <div className="card-number">
          {cardNumber ? cardNumber : "0123456789101112"}
        </div>
        <div className="card-holder">
          {cardHolder ? cardHolder : "John Smith"}
        </div>
        <div className="card-expiry">
          <span>Expires</span>
          <span>
            {(expiresMonth ? expiresMonth : "MM") +
              "/" +
              (expiresYear ? expiresYear : "YY")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default CardPreview;
