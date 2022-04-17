import {createSlice, createSelector} from '@reduxjs/toolkit';
import { StoreType } from '../..';
import { IProfile } from '../../../types';
import { getProfileReducer } from './asyncReducers';

interface IProfileSlice {
  profile?: IProfile;
}

const profileSlice = createSlice({
  initialState: {} as IProfileSlice,
  reducers: {},
  name: "profile",
  extraReducers: (builder) => {
    builder.addCase(getProfileReducer.fulfilled, (state, action) => {
      state.profile = action.payload;
    })
  }
})

export const getProfile = createSelector(
  (state: StoreType) => state.profile,
  (state) => state
)

export default profileSlice.reducer;