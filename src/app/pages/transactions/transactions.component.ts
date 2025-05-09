import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HistoryTableColumns } from 'src/app/app.config';
import { getTransactionHistory } from 'src/app/store/app.action';
import { StateType, TransacHistory } from 'src/app/store/app.reducer';

interface HistoryColumn {
  field: string;
  displayName: string;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  standalone: false,
})
export class TransactionsComponent implements OnInit {
  historyColumn: HistoryColumn[] = HistoryTableColumns;

  transactionHistory: TransacHistory[] = [];

  constructor(private store: Store<{ stockReducer: StateType }>) {
    this.store.dispatch(getTransactionHistory());

    this.store.select('stockReducer').subscribe(({ history }) => {
      this.transactionHistory = history;
    });
  }

  ngOnInit(): void {}
}
