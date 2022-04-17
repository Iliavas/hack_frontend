import {createAsyncThunk} from '@reduxjs/toolkit';
import { getProfile } from '../../../api/profile';

export const getProfileReducer = createAsyncThunk(
  "profile1/getProfileQuery",
  async () => {
    return getProfile();
  }
)