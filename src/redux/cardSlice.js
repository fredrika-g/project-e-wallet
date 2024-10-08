import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [
      {
        provider: "Visa",
        cardNumber: "1234567890123456",
        cardHolder: "Anna Svensson",
        expires: { month: "12", year: "26" },
        CCV: 123,
      },
      {
        provider: "MasterCard",
        cardNumber: "9876543210987654",
        cardHolder: "Anna Svensson",
        expires: { month: "06", year: "25" },
        CCV: 456,
      },
    ],
  },
  reducers: {},
});

export default cardSlice.reducer;

// card object schema
// card = {
//     provider: "string",
//     cardNumber: Number (16),
//     cardHolder: "string" (no numeric values) ,
//     expires: {month: MM, year: YY} (not passed),
//     CCV: number (max 3)
//};
