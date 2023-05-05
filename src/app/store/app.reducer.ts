import { createReducer, on } from '@ngrx/store';
import * as StockActions from './app.action';

export interface Stock {
  amount: number;
  currency: '$';
  count: number;
  totalAmount?: number;
}

export interface TransacHistory {
  date: Date;
  amount: string;
  denomination: any[];
}

export interface StateType {
  stock: Stock[];
  history: TransacHistory[];
}

const initialState: StateType = {
  stock: [],
  history: [],
};

export const StockReducer = createReducer(
  initialState,
  on(StockActions.reFillStock, (state, payload) => {
    console.log(state, payload);

    return { ...state };
  }),
  on(StockActions.withdawAmount, (state, payload) => {
    console.log(state, payload);

    return { ...state };
  }),
  on(StockActions.getAvailableStock, (state) => {
    return { ...state };
  }),
  on(StockActions.availableListSuccess, (state, payload) => ({
    ...state,
    ...payload,
  })),
  on(StockActions.historyListSuccess, (state, payload) => {
    return { ...state };
  }),
  on(StockActions.historyListSuccess, (state, payload) => {
    return { ...state, ...payload };
  })
);

export const reducers: any = {
  stockReducer: StockReducer,
};
