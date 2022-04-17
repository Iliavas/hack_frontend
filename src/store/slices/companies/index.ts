import {createSlice, createSelector} from "@reduxjs/toolkit";
import { $CombinedState } from "redux";
import { StoreType } from "../..";
import { Company } from "../../../types";
import { getCompaniesReducer, getCompanyReducer } from "./asyncReducers";

interface ICompaniesSlice {
  active?: Company,
  list: Company[]
}

const companiesSlice = createSlice(
  {
    initialState: {
      activeCompany: null,
      list: []
    } as ICompaniesSlice,
    name: "companies",
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getCompaniesReducer.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      builder.addCase(getCompanyReducer.fulfilled, (state, action) => {
        state.active = action.payload;
      })
    }
  }
);

export const getCompanies = createSelector(
  (state: StoreType) => state.company.list, 
  (state) => state
);
export const getCompany = createSelector(
  (state: StoreType) => state.company.active,
  (state) => state
);

export default companiesSlice.reducer;
