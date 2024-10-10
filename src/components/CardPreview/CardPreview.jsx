import PreviewCard from "../PreviewCard/PreviewCard";

function CardPreview({
  provider,
  cardNumber,
  cardHolder,
  expiresMonth,
  expiresYear,
}) {
  return (
    <section className="bank-card">
      <h3>Preview</h3>
      <PreviewCard
        provider={provider}
        cardHolder={cardHolder}
        cardNumber={cardNumber}
        expiresMonth={expiresMonth}
        expiresYear={expiresYear}
      />
    </section>
  );
}

export default CardPreview;
