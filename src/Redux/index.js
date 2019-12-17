import { configureStore, getDefaultMiddleware } from "@reduxjs/redux-toolkit";
import purchaseSumReducer from "./reducers/purchaseSumReducer";
import apiMiddleware from "./middlewares/apiMiddleware";

const defaultMiddlewars = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  middleware: [...defaultMiddlewars, apiMiddleware],
  reducer: {
    summary: purchaseSumReducer
  }
});

export default store;
