import {createSlice} from '@reduxjs/toolkit';
import { getParticipateInSession, postParticipateInSession } from '../../../api/participateInSession';
import { IParticipateInSession, ParticipateInSession } from '../../../types';
import { getParticipateInSessionsReducer, postParticipateInSessionReducer, putParticipateSessionReducer } from './asyncReducers';

interface IParticipateInSessionSlice{
  list: IParticipateInSession[];
  activeId: number;
}

const participateInSessionSlice = createSlice({
  initialState: {
    list: [],
    activeId: 0
  } as IParticipateInSessionSlice,
  name: "participateInSession",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getParticipateInSessionsReducer.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(putParticipateSessionReducer.fulfilled, (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id == (action.payload as ParticipateInSession).id) {
          return action.payload;
        }
        return e;
      })
    });
    builder.addCase(postParticipateInSessionReducer.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    // builder.addCase(getParticipateInSessionsReducer.fulfilled, (state, action) => {
    //   state.activeId = (action.payload as ParticipateInSession).id;
    // })
  }
})


export default participateInSessionSlice.reducer;