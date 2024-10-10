import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [
      {
        id: 100,
        provider: "Visa",
        cardNumber: "1234567890123456",
        cardHolder: "Anna Svensson",
        expiresMonth: "12",
        expiresYear: "26",
        ccv: 123,
        active: true,
      },
      {
        id: 101,
        provider: "MasterCard",
        cardNumber: "9876543210987654",
        cardHolder: "Anna Svensson",
        expiresMonth: "06",
        expiresYear: "25",
        ccv: 456,
        active: false,
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;

// card object schema
// card = {
//     provider: "string",
//     cardNumber: Number (16),
//     cardHolder: "string" (no numeric values) ,
//     expires: {month: MM, year: YY} (not passed),
//     CCV: number (max 3)
//};
