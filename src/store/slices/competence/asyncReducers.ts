import {createAsyncThunk} from '@reduxjs/toolkit';
import { getCompetence, getCompetences } from '../../../api/competence';

export const getCompetencesReducer = createAsyncThunk(
  "competence/getCompetences",
  async () => {
    return await getCompetences();
  }
);

export const getCompetenceReducer = createAsyncThunk(
  "competence/getCompetence",
  async (id: string) => {
    return await getCompetence(id);
  }
)