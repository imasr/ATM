import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  availableListSuccess,
  getAvailableStock,
  getTransactionHistory,
  historyListSuccess,
  reFillStock,
  widthdrawSuccess,
  withdawAmount,
} from './app.action';
import { DataService } from '../shared/services/data.service';
import { Stock, TransacHistory } from './app.reducer';
import { AlertService } from '../shared/services/toster.service';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private alertService: AlertService
  ) {}

  getStockList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAvailableStock),
      switchMap(() => {
        return this.dataService.getData().pipe(
          map((resp: Stock[]) => {
            console.log('getStockList', resp);
            return availableListSuccess([...resp]);
          }),
          catchError((err) => {
            console.log(err);

            return of(err);
          })
        );
      })
    )
  );

  updateStockList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(reFillStock),
      switchMap(({ stock }) => {
        return this.dataService.setData(stock).pipe(
          map((resp: Stock[]) => {
            this.alertService.showSuccess('Stock data is updated', 'Success');
            return availableListSuccess([...resp]);
          }),
          catchError((err) => {
            this.alertService.showSuccess(err, 'Error');
            return of(err);
          })
        );
      })
    )
  );

  getHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTransactionHistory),
      switchMap(() => {
        return this.dataService.getTransactionData().pipe(
          map((resp: TransacHistory[]) => {
            console.log('gettransaction', resp);
            return historyListSuccess([...resp]);
          }),
          catchError((err) => {
            console.log(err);
            return of(err);
          })
        );
      })
    )
  );

  withdrawAmount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(withdawAmount),
      switchMap(({ amount }: any) => {
        return this.dataService.checkIfAmountAvailable(amount).pipe(
          map((resp: any) => {
            console.log('withdrawAmount', resp);
            this.alertService.showSuccess(resp.msg, 'Success');
            return widthdrawSuccess({
              history: resp.history,
              stock: resp.stock,
            });
          }),
          catchError((err) => {
            console.log(err);
            this.alertService.showWarning(err.error, err.type);
            return of(err);
          })
        );
      })
    )
  );
}
