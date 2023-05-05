import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Stock, TransacHistory } from 'src/app/store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  defaultStockList: Stock[] = Object.create([
    { amount: 100, currency: '$', count: 10 },
    { amount: 50, currency: '$', count: 10 },
    { amount: 20, currency: '$', count: 10 },
    { amount: 10, currency: '$', count: 10 },
    { amount: 5, currency: '$', count: 10 },
  ]);
  totalAmount = 0;
  transactionHistory: TransacHistory[] = [];

  constructor() {
    this.getLocalStorageData();
  }

  getLocalStorageData() {
    const data = localStorage.getItem('stock');
    if (data) {
      this.defaultStockList = JSON.parse(data);
    }
  }

  calculateTotalAvailableAmount() {
    let totalAvailableBalace = 0;
    for (let stock of this.defaultStockList) {
      const total = +stock.amount * +stock.count;
      totalAvailableBalace = totalAvailableBalace + total;
    }
    return totalAvailableBalace;
  }

  checkIfAmountAvailable(amountToWithdraw: number): Observable<any> {
    let data: any = {};
    if (amountToWithdraw % 5 !== 0) {
      return throwError({
        error: 'You Cannot widthdraw entered amount',
        type: 'error',
      });
    } else {
      const balance = this.calculateTotalAvailableAmount();
      if (amountToWithdraw <= balance) {
        const countToSubtract: any = this.processTransaction(amountToWithdraw);
        this.deductAmoutFromStock(countToSubtract);
        const history = this.prepareTrasactionHistory(
          countToSubtract,
          amountToWithdraw
        );
        data = { history, stock: this.defaultStockList };
        this.storeToLocal(data);
        data['msg'] = `Amount $${amountToWithdraw} deducted from your account`;

        return of(data);
      } else {
        return throwError({
          error: "You don't have sufficient balace in your account",
          type: 'warning',
        });
      }
    }
  }

  storeToLocal(data: any) {
    Object.keys(data).forEach((key: string) => {
      localStorage.setItem(key, JSON.stringify(data[key]));
    });
  }

  processTransaction(withdrawAmount: number) {
    let newObject: any = {};

    for (let index = 0; index < this.defaultStockList.length; index++) {
      const { amount, count } = this.defaultStockList[index];
      const newcount = Math.min(Math.floor(withdrawAmount / amount), count);
      if (newcount) {
        console.log(newcount);
        newObject[amount] = newcount;
        withdrawAmount = withdrawAmount - amount * newcount;
      }
    }
    console.log(newObject);
    return newObject;
  }

  deductAmoutFromStock(currencyCount: any) {
    for (let index = 0; index < this.defaultStockList.length; index++) {
      const stock = this.defaultStockList[index];
      if (stock.count && currencyCount[stock.amount]) {
        stock.count = stock.count - currencyCount[stock.amount];
      }
    }
    console.log(this.defaultStockList);
  }

  prepareTrasactionHistory(currencyCount: any, amountToWithdraw: number) {
    const history = localStorage.getItem('history');
    if (history) {
      this.transactionHistory = JSON.parse(history);
    }

    const transaction: any = {
      amount: amountToWithdraw,
      date: new Date(),
      denomination: currencyCount,
    };
    this.transactionHistory.push(transaction);
    return this.transactionHistory;
  }

  getData(): Observable<Stock[]> {
    const locaData = localStorage.getItem('stock');
    if (locaData && locaData.length) {
      const data: any = JSON.parse(locaData);
      return of(data);
    }
    return of(this.defaultStockList);
  }

  setData(newStock: Stock[]): Observable<Stock[]> {
    this.defaultStockList = newStock;
    localStorage.setItem('stock', JSON.stringify(newStock));
    return of(newStock);
  }

  getTransactionData(): Observable<TransacHistory[]> {
    const history = localStorage.getItem('history');
    if (history && history.length) {
      return of(JSON.parse(history));
    }
    return of(this.transactionHistory);
  }
}
