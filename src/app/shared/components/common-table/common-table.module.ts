import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './common-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonTableComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonTableComponent],
})
export class CommonTableModule {}
