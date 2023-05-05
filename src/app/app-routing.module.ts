import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    data: { title: 'ATM Overview' },
    loadChildren: () =>
      import('./pages/atm-overview/atm-overview.module').then(
        (m) => m.AtmOverviewModule
      ),
  },
  {
    path: 'restock',
    data: { title: 'Restock' },
    loadChildren: () =>
      import('./pages/restock/restock.module').then((m) => m.ReStockModule),
  },
  {
    path: 'withdraw',
    data: { title: 'Withdraw' },
    loadChildren: () =>
      import('./pages/withdraw/withdraw.module').then((m) => m.WithdrawModule),
  },
  {
    path: 'transactions',
    data: { title: 'Transactions History' },
    loadChildren: () =>
      import('./pages/transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
  },
  { path: '**', redirectTo: 'overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
