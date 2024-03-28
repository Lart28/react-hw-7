import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeValue(state, action) {
      return state = action.payload;
    }
  }
  })

export const { changeValue } = filterSlice.actions;