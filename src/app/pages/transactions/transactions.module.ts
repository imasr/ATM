import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { CommonTableModule } from 'src/app/shared/components/common-table/common-table.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    CommonTableModule,
    RouterModule.forChild([{ path: '', component: TransactionsComponent }]),
  ],
})
export class TransactionsModule {}
