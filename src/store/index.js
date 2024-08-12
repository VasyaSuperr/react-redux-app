import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import themeReduser from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeData: themeReduser,
  },
});

export default store;

// reducer - чиста функція
// action - js-object з обов'язковою властивістю
//          {type: "", payload: }

//   // сховище = стан + як змінювати стан (reduser)
//   const store = legacy_createStore(reducer);
