import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { copyData } from '../../utility/utils';

interface Column {
  field: string;
  displayName?: string;
  type?: string;
  editable?: boolean;
  onChangeEvent?: boolean;
}

@Component({
  selector: 'common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent {
  @Input() columns: Column[] = [];
  @Input() data: any[] = [];
  @Input() noDataText = 'No data';
  @Input() allowEditing = false;
  @Input() showIndex = false;
  originalData: any[] = [];
  @Output() updatedRecord: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnChanges() {
    this.originalData = copyData(this.data);
  }

  updateRow({ target: { value } }: any, row: any) {
    row.count = +value;
  }

  updateTable(data: any) {
    this.updatedRecord.emit(data);
  }

  clear() {
    this.data = copyData(this.originalData);
  }
}
