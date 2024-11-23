import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    nameFilter: "", // Başlangıç filtresi boş
  },
  reducers: {
    changeFilter(state, action) {
      state.nameFilter = action.payload; // Filtreyi günceller
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
