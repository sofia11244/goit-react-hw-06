import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage"; // LocalStorage usage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// Redux Persist Config
const persistConfig = {
  key: "root", // Storage key
  storage, // LocalStorage
  whitelist: ["contacts", "filters"], // Only persist `contacts` and `filters`
};

// Combine Reducers
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

// Apply Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Store with Persisted Reducer
export const store = configureStore({
  reducer: persistedReducer, // Using the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create Persistor
export const persistor = persistStore(store);