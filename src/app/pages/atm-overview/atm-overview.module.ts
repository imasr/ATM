import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmOverviewComponent } from './atm-overview.component';
import { RouterModule } from '@angular/router';
import { CommonTableModule } from 'src/app/shared/components/common-table/common-table.module';

@NgModule({
  declarations: [AtmOverviewComponent],
  imports: [
    CommonModule,
    CommonTableModule,
    RouterModule.forChild([{ path: '', component: AtmOverviewComponent }]),
  ],
  exports: [AtmOverviewComponent],
})
export class AtmOverviewModule {}
