function validateInputs(inputs) {
  console.log(inputs);
  let errors = {};
  let hasErrors = false;

  // Validate provider (should be a non-empty string)
  if (typeof inputs.provider !== "string" || inputs.provider.trim() === "") {
    errors.provider = "Provider must be a non-empty string.";
  }

  // Validate card number (should be a string of 16 digits)
  if (
    typeof inputs.cardNumber !== "string" ||
    !/^\d{16}$/.test(inputs.cardNumber)
  ) {
    errors.cardNumber = "Card number must be a string consisting of 16 digits.";
  }

  // Validate card holder (should not contain numeric values)
  if (!/^[a-zA-Z\s]+$/.test(inputs.cardHolder)) {
    errors.cardHolder =
      "Card holder name must only contain alphabetic characters and spaces.";
  }

  // Validate expiration date (month: MM, year: YY, must not be expired)
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year
  const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based, so add 1

  const expires = { month: inputs.expiresMonth, year: inputs.expiresYear };

  if (
    typeof expires.month !== "string" ||
    !/^\d{2}$/.test(expires.month) ||
    expires.month < 1 ||
    expires.month > 12
  ) {
    errors.expires.month =
      "Expiration month must be a valid two-digit string (MM).";
  }

  if (
    typeof expires.year !== "string" ||
    !/^\d{2}$/.test(expires.year) ||
    expires.year < currentYear ||
    (expires.year == currentYear && expires.month < currentMonth)
  ) {
    errors.expires.year = "Card has expired or the expiration year is invalid.";
  }

  // Validate CCV (should be a 3-digit number string)
  if (typeof inputs.ccv !== "string" || !/^\d{3}$/.test(inputs.ccv)) {
    errors.ccv = "CCV must be a string consisting of 3 digits.";
  }

  // Example usage
  //   const paymentInput = {
  //     provider: "Visa",
  //     cardNumber: "1234567812345678",
  //     cardHolder: "John Doe",
  //     expires: { month: "12", year: "25" },
  //     CCV: "123",
  //   };

  //   const result = validatePaymentInput(paymentInput);

  return { hasErrors, errors };
}

export default validateInputs;
