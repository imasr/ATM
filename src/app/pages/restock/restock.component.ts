import { Component, OnInit } from '@angular/core';

import { copyData } from 'src/app/shared/utility/utils';
import { Store } from '@ngrx/store';
import { getAvailableStock, reFillStock } from 'src/app/store/app.action';
import { StateType, Stock } from 'src/app/store/app.reducer';
import { StockTableRefillColumns } from 'src/app/app.config';

interface StockColumn {
  field: string;
  displayName: string;
}

@Component({
  selector: 'restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss'],
})
export class ReStockComponent implements OnInit {
  stocksColumn: StockColumn[] = StockTableRefillColumns;

  stockData: Stock[] = [];

  constructor(private store: Store<{ stockReducer: StateType }>) {
    this.store.dispatch(getAvailableStock());
    this.store.select('stockReducer').subscribe(({ stock }) => {
      console.log(stock);
      this.stockData = copyData(stock);
    });
  }

  ngOnInit(): void {}

  updateButtonEvent(data: any) {
    console.log(data);
    this.store.dispatch(reFillStock(data));
  }
}
