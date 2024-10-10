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
    deleteCard: (state, action) => {
      let cardIndex = state.cards.indexOf((card) => card.id === action.payload);
      state.cards.splice(cardIndex, 1);
    },
    activateCard: (state, action) => {
      let currentActive = state.cards.find((card) => card.active);
      currentActive.active = false;

      let newActive = state.cards.find((card) => card.id === action.payload);
      newActive.active = true;
    },
    updateCard: (state, action) => {
      let { cardHolder, cardNumber, provider, expiresMonth, expiresYear, ccv } =
        action.payload;

      let card = state.cards.find((c) => c.id === action.payload.id);
      card.cardHolder = cardHolder;
      card.cardNumber = cardNumber;
      card.provider = provider;
      card.expiresMonth = expiresMonth;
      card.expiresYear = expiresYear;
      card.ccv = ccv;

      console.log("updateCard", card);
    },
  },
});

export const { addCard, deleteCard, activateCard, updateCard } =
  cardSlice.actions;

export default cardSlice.reducer;

// card object model
// card = {
//     provider: "string",
//     cardNumber: Number (16),
//     cardHolder: "string" (no numeric values) ,
//     expires: {month: MM, year: YY} (not passed),
//     CCV: number (max 3)
//};
