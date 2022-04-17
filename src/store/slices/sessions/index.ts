import {createSlice, createSelector} from '@reduxjs/toolkit';
import { StoreType } from '../..';
import { ISession } from '../../../types';
import { getPotentialSessionsReducer, getSessionsReducer } from './asyncReducers';

interface ISessions {
  archieveSessions: ISession[],
  potentialSessions: ISession[],
  currentSessions: ISession[]
}

const sessionsSlice = createSlice({
  initialState: {
    archieveSessions: [] as ISession[],
    potentialSessions: [] as ISession[],
    currentSessions: [] as ISession[]
  } as ISessions,
  name: "sessions",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSessionsReducer.fulfilled, (state, action) => {
      state.archieveSessions = action.payload.filter((e: ISession) => e.status == "ARCHIEVE")
      state.currentSessions = action.payload.filter((e: ISession) => e.status == "CURRENT")      
    });
    builder.addCase(getPotentialSessionsReducer.fulfilled, (state, action) => {
      state.potentialSessions = action.payload;
    });
  }
})

export const getArhcieveSessions = createSelector(
  (state: StoreType) => state.sessions.archieveSessions,
  (state) => state
)

export const getCurrentSessions = createSelector(
  (state: StoreType) => state.sessions.currentSessions,
  (state) => state
)

export const getPotentialSessions = createSelector(
  (state: StoreType) => state.sessions.potentialSessions,
  (state) => state
)

export default sessionsSlice.reducer;
