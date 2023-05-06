import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { stockData } from 'src/app/app.config';
import { Stock, TransacHistory } from 'src/app/store/app.reducer';
import { storeToLocal } from '../utility/utils';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  defaultStockList: Stock[] = [];
  totalAmount = 0;
  transactionHistory: TransacHistory[] = [];

  constructor() {
    this.loadData();
  }

  loadData() {
    const data = localStorage.getItem('stock');
    if (data) {
      this.defaultStockList = JSON.parse(data);
    } else this.defaultStockList = stockData;
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
    try {
      if (amountToWithdraw % 5 !== 0) {
        throw 'You Cannot widthdraw entered amount';
      } else {
        const balance = this.calculateTotalAvailableAmount();
        if (amountToWithdraw <= balance) {
          const countToSubtract = this.processTransaction(amountToWithdraw);
          if (countToSubtract && !Object.keys(countToSubtract).length) {
            throw 'Entered Denomination is not available';
          }
          data = this.executeTransaction(amountToWithdraw, countToSubtract);
          data[
            'msg'
          ] = `Amount $${amountToWithdraw} deducted from your account`;

          return of(data);
        } else {
          throw "You don't have sufficient balace in your account";
        }
      }
    } catch (error) {
      return throwError({
        error: error,
        type: 'error',
      });
    }
  }

  executeTransaction(amountToWithdraw: number, countToSubtract: any) {
    this.deductAmoutFromStock(countToSubtract);
    const history = this.prepareTrasactionHistory(
      countToSubtract,
      amountToWithdraw
    );
    storeToLocal({
      history: this.transactionHistory,
      stock: this.defaultStockList,
    });
    return { history, stock: this.defaultStockList };
  }

  processTransaction(withdrawAmount: number) {
    let newObject: any = {};

    for (let index = 0; index < this.defaultStockList.length; index++) {
      const { amount, count } = this.defaultStockList[index];
      const newcount = Math.min(Math.floor(withdrawAmount / amount), count);
      if (newcount) {
        newObject[amount] = newcount;
        withdrawAmount = withdrawAmount - amount * newcount;
      }
    }
    return newObject;
  }

  deductAmoutFromStock(currencyCount: any) {
    const source = JSON.parse(JSON.stringify(this.defaultStockList));

    for (let index = 0; index < source.length; index++) {
      const stock = source[index];
      if (stock.count && currencyCount[stock.amount]) {
        stock.count = stock.count - currencyCount[stock.amount];
      }
    }
    this.defaultStockList = source;
  }

  prepareTrasactionHistory(currencyCount: any, amountToWithdraw: number) {
    const transactionList = localStorage.getItem('history');
    if (transactionList) {
      this.transactionHistory = JSON.parse(transactionList);
    }

    const transaction: any = {
      amount: amountToWithdraw,
      date: new Date(),
      denomination: currencyCount,
    };
    this.transactionHistory.push(transaction);
    return transaction;
  }

  getStockData(): Observable<Stock[]> {
    const locaData = localStorage.getItem('stock');
    if (locaData && locaData.length) {
      const data: any = JSON.parse(locaData);
      return of(data);
    }
    return of(this.defaultStockList);
  }

  setStockData(newStock: Stock[]): Observable<Stock[]> {
    this.defaultStockList = newStock;
    localStorage.setItem('stock', JSON.stringify(newStock));
    return of(newStock);
  }

  getTransactionData(): Observable<TransacHistory[]> {
    const transaction = localStorage.getItem('history');
    if (transaction && transaction.length) {
      return of(JSON.parse(transaction));
    }
    return of(this.transactionHistory);
  }
}
