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
        ccv: "123",
        active: true,
      },
      {
        id: 101,
        provider: "MasterCard",
        cardNumber: "9876543210987654",
        cardHolder: "Anna Svensson",
        expiresMonth: "06",
        expiresYear: "25",
        ccv: "456",
        active: false,
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      let cardIndex = state.cards.findIndex(
        (card) => card.id === action.payload
      );
      if (cardIndex !== -1) {
        state.cards.splice(cardIndex, 1);
      } else {
        console.log("Card not found");
      }
    },
    activateCard: (state, action) => {
      let currentActive = state.cards.find((card) => card.active);
      if (currentActive) {
        currentActive.active = false;
      } else {
        console.log("No currently active card found");
      }

      let newActive = state.cards.find((card) => card.id === action.payload);
      if (newActive) {
        newActive.active = true;
      } else {
        console.log("Card not found");
      }
    },
    updateCard: (state, action) => {
      let { cardHolder, cardNumber, provider, expiresMonth, expiresYear, ccv } =
        action.payload;

      let card = state.cards.find((c) => c.id === action.payload.id);
      if (card) {
        card.cardHolder = cardHolder;
        card.cardNumber = cardNumber;
        card.provider = provider;
        card.expiresMonth = expiresMonth;
        card.expiresYear = expiresYear;
        card.ccv = ccv;
      } else {
        console.log("Card not found");
      }
    },
    deleteInactive: (state) => {
      let updatedCards = state.cards.filter((card) => card.active);
      state.cards = updatedCards;
    },
  },
});

export const { addCard, deleteCard, activateCard, updateCard, deleteInactive } =
  cardSlice.actions;

export default cardSlice.reducer;

// card object model
// card = {
//     provider: "string",
//     cardNumber: "numerical string" (16),
//     cardHolder: "string" (no numeric values) ,
//     expiresMonth: "MM",
//     expiresYear: "YY",
//     ccv: "numerical string" (max 3)
//     active: boolean
//};
