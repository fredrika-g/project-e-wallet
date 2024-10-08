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
        <div className="card-provider">{provider}</div>
        <div className="card-number">{cardNumber}</div>
        <div className="card-holder">{cardHolder}</div>
        <div className="card-expiry">
          <span>Expires</span>
          <span>{expiresMonth + "/" + expiresYear}</span>
        </div>
      </div>
    </section>
  );
}

export default CardPreview;
