import {createAsyncThunk} from '@reduxjs/toolkit';
import { getPotentialSessions, getSession, getSessions } from '../../../api/session';

export const getSessionsReducer = createAsyncThunk(
  "sessions/getSessions",
  async () => {
    return await getSessions()
  }
)

export const getSessionReducer = createAsyncThunk(
  "sessions/getSession",
  async (id: string) => {
    return await getSession(id);
  }
);

export const getPotentialSessionsReducer = createAsyncThunk(
  "sessions/getPotentialSessions",
  async (competenceId: string) => {
    return await getPotentialSessions(competenceId);
  }
)