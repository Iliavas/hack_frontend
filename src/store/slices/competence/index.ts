import {createSlice, createSelector} from '@reduxjs/toolkit';
import { StoreType } from '../..';
import { ICompetence } from '../../../types';
import { getCompetenceReducer, getCompetencesReducer } from './asyncReducers';

interface ICompetenceSlice{
  active?: ICompetence;
  list: ICompetence[];
}

export const competenceSlice = createSlice({
  initialState: {
    active: undefined,
    list: [] as ICompetence[]
  } as ICompetenceSlice,
  reducers: {},
  name: "competence",
  extraReducers: (builder) => {
    builder.addCase(getCompetencesReducer.fulfilled, (action, state) => {
      action.list = state.payload;
    });
    builder.addCase(getCompetenceReducer.fulfilled, (action, state) => {
      action.active = state.payload;
    })
  }
})

export const getCompetences = createSelector(
  (state: StoreType) => state.competence.list,
  (state) => state
);

export const getCompetence = createSelector(
  (state: StoreType) => state.company.active,
  (state) => state
);

export default competenceSlice.reducer;