function validateInputs(inputs) {
  console.log(inputs);
  let errors = {};

  // Provider (non-empty string)
  if (typeof inputs.provider !== "string" || inputs.provider.trim() === "") {
    errors.provider = "Please choose a provider in the list";
  }

  // Card Number (16 numerical digits)
  if (
    typeof inputs.cardNumber !== "string" ||
    !/^\d{16}$/.test(inputs.cardNumber)
  ) {
    errors.cardNumber = "Card number must consist of 16 numerical digits";
  }

  // Card Holder (valid name format)
  if (!/^[a-zA-Z\s]+$/.test(inputs.cardHolder)) {
    errors.cardHolder =
      "Card holder name must consist of alphabetic characters and spaces";
  }

  // Expiration Date (check not expired)
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // extract last two digits of year
  const currentMonth = currentDate.getMonth() + 1;

  const expires = { month: inputs.expiresMonth, year: inputs.expiresYear };

  if (
    typeof expires.month !== "string" ||
    !/^\d{2}$/.test(expires.month) ||
    expires.month < 1 ||
    expires.month > 12
  ) {
    errors.expires = {};
    errors.expires.month = "Expiration month must follow format: MM";
  }

  if (
    typeof expires.year !== "string" ||
    !/^\d{2}$/.test(expires.year) ||
    expires.year < currentYear ||
    (expires.year == currentYear && expires.month < currentMonth)
  ) {
    errors.expires = {};
    errors.expires.year = "Card has expired or the expiration year is invalid";
  }

  // ccv
  if (typeof inputs.ccv !== "string" || !/^\d{3}$/.test(inputs.ccv)) {
    errors.ccv = "CCV must consist of 3 numerical digits";
  }

  return { hasErrors: Object.keys(errors).length > 0, errors };
}

export default validateInputs;
