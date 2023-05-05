import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReStockComponent } from './restock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { RouterModule } from '@angular/router';
import { CommonTableModule } from 'src/app/shared/components/common-table/common-table.module';

@NgModule({
  declarations: [ReStockComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    ReactiveFormsModule,
    CommonTableModule,
    RouterModule.forChild([{ path: '', component: ReStockComponent }]),
  ],
  exports: [ReStockComponent],
})
export class ReStockModule {}
