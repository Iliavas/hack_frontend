import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import companyReducer from './slices/companies';
import competenceReducer from './slices/competence';
import profileReducer from './slices/profile';
import sessionsReducer from './slices/sessions';
import participateInSessionReducer from './slices/participateInSession';

const store = createStore(combineReducers(
  {
    company: companyReducer, 
    competence: competenceReducer,
    profile: profileReducer,
    sessions: sessionsReducer,
    participateInSession: participateInSessionReducer
  }
), applyMiddleware(thunkMiddleware));

export type StoreType = ReturnType<typeof store.getState>;

export default store;
