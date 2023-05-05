import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/shared/services/data.service';
import { AlertService } from 'src/app/shared/services/toster.service';
import { getAvailableStock, withdawAmount } from 'src/app/store/app.action';
import { StateType } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  amountForm = new FormGroup({
    amountToWithdraw: new FormControl(0, Validators.min(1)),
  });

  constructor(
    private dataService: DataService,
    private store: Store<{ stockReducer: StateType }>
  ) {
    this.store.select('stockReducer').subscribe((state) => {
      console.log('withdrawstate', state);
      this.amountForm.reset();
    });
  }

  ngOnInit(): void {}

  submit(amountForm: FormGroup) {
    if (amountForm.valid && amountForm.value.amountToWithdraw) {
      console.log(amountForm.value.amountToWithdraw);
      this.store.dispatch(withdawAmount(amountForm.value.amountToWithdraw));
    }
  }
}
