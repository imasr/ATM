import { createAction, props } from '@ngrx/store';
import { StateType, Stock, TransacHistory } from './app.reducer';

export const reFillStock = createAction(
  '[REFILL_STOCK Component] REFILL_STOCK',
  // props<{ stock: Stock[] }>()
  (stock: Stock[]) => ({ stock })
);

export const getAvailableStock = createAction(
  '[AvailableStock Component] getAvailableStock'
);

export const availableListSuccess = createAction(
  '[AvailableListSuccess Component] getAvailableListSuccess',
  (stock: Stock[]) => ({ stock })
);

export const createTransaction = createAction(
  '[TRANSACTION HISTORY] Trasnsaction History'
);

export const withdawAmount = createAction(
  '[WIDTHDRAW_AMOUNT Component] WIDTHDRAW_AMOUNT',
  (amount: number) => ({ amount })
);

export const setTransactionHistory = createAction(
  '[ CREATE HISTORY] CREATE History',
  // props<{ stock: Stock[] }>(),
  (history: TransacHistory[]) => ({ history })
);

export const getTransactionHistory = createAction(
  '[GET TRANSACTION HISTORY] GET Trasnsaction History'
);

export const historyListSuccess = createAction(
  '[transactionListSuccess Component] transactionListSuccess',
  (history: TransacHistory[]) => ({ history })
);

export const widthdrawSuccess = createAction(
  '[widthdrawSuccess Component] widthdrawSuccess',
  (state: StateType) => state
);

export const widthdrawError = createAction(
  '[widthdrawError Component] widthdrawError',
  (erorr: any) => erorr
);
