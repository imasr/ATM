import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WithdrawComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: WithdrawComponent }]),
  ],
})
export class WithdrawModule {}
