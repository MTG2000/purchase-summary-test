import { createSlice } from "@reduxjs/redux-toolkit";

const initialState = {
  item: {},
  pickupSavings: 0,
  oldTotal: 0,
  total: 0,
  taxes: 0,
  discounted: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    SET_ITEM: (state, action) => {
      state.item = action.payload;
      const item = state.item;
      state.pickupSavings = item.price > 3000 ? 150 : item.price * 0.03;
      state.taxes = item.price > 1000 ? item.price * 0.1 : item.price * 0.05;
      state.total = item.price + state.taxes - state.pickupSavings;
    },
    SET_DISCOUNT: (state, action) => {
      state.oldTotal = state.total;
      state.discounted = true;
      state.total = state.item.price * 0.9 + state.taxes - state.pickupSavings;
    }
  },
  extraReducers: {
    //Extra Reducers are reducers that wont have Auto-generated actions creaters and naming-prefix
  }
});

export const {
  SET_ITEM: setItem,
  SET_DISCOUNT: makeDiscount
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
