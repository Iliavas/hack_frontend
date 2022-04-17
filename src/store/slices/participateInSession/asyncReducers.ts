import {createAsyncThunk} from '@reduxjs/toolkit';
import { getParticipateInSession, getParticipateInSessions, postParticipateInSession, putParticipateInSession } from '../../../api/participateInSession';
import { ParticipateInSession } from '../../../types';

export const getParticipateInSessionsReducer = createAsyncThunk(
  "participateInSession/getParticipateInSessions",
  async () => {
    return await getParticipateInSessions();
  }
)

export const getPaticipateInSessionReducer = createAsyncThunk(
  "participateInSession/getParticipateInSession123",
  async (id: string) => {
    return await getParticipateInSession(id)
  }
)

export const putParticipateSessionReducer = createAsyncThunk(
  "participateInSession/putParticipateInSession",
  async (data: ParticipateInSession) => {
    return await putParticipateInSession(data);
  }
)

export const postParticipateInSessionReducer = createAsyncThunk(
  "participateInSession/postParticipateInSession",
  async (data: ParticipateInSession) => {
    return await postParticipateInSession(data);
  }
)