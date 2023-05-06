import { Stock } from './store/app.reducer';

export const pages = [
  {
    label: 'ATM Overview',
    path: 'overview',
  },
  {
    label: 'Restock',
    path: 'restock',
  },
  {
    label: 'Withdraw',
    path: 'withdraw',
  },
  {
    label: 'Transaction history',
    path: 'transactions',
  },
];

export const StockTableColumns = [
  { field: 'amount', displayName: 'Amount' },
  { field: 'currency', displayName: 'Currency' },
  { field: 'count', displayName: 'No. of Notes' },
];

export const StockTableRefillColumns = [
  { field: 'amount', displayName: 'Amount' },
  { field: 'currency', displayName: 'Currency' },
  {
    field: 'count',
    displayName: 'No. of Notes',
    type: 'number',
    editable: true,
    onChangeEvent: true,
  },
];

export const HistoryTableColumns = [
  { field: 'date', displayName: 'Date', type: 'date' },
  { field: 'amount', displayName: 'Currency' },
  { field: 'denomination', displayName: 'Denominations', type: 'object' },
];

export const stockData: Stock[] = [
  { amount: 100, currency: '$', count: 10 },
  { amount: 50, currency: '$', count: 10 },
  { amount: 20, currency: '$', count: 10 },
  { amount: 10, currency: '$', count: 10 },
  { amount: 5, currency: '$', count: 10 },
];
