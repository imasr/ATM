import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StockTableColumns } from 'src/app/app.config';
import { copyData } from 'src/app/shared/utility/utils';
import { getAvailableStock } from 'src/app/store/app.action';
import { StateType, Stock } from 'src/app/store/app.reducer';

interface StockColumn {
  field: string;
  displayName: string;
}

@Component({
  selector: 'atm-overview',
  templateUrl: './atm-overview.component.html',
  styleUrls: ['./atm-overview.component.scss'],
  standalone: false,
})
export class AtmOverviewComponent implements OnInit {
  stocksColumn: StockColumn[] = StockTableColumns;
  stockData: Stock[] = [];

  constructor(private store: Store<{ stockReducer: StateType }>) {
    this.store.dispatch(getAvailableStock());
    this.store.select('stockReducer').subscribe(({ stock }) => {
      this.stockData = copyData(stock);
    });
  }

  ngOnInit(): void {}
}
