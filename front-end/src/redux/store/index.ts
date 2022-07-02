import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const makeStore = () => store;

export const storeWrapper = createWrapper(makeStore);
