import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Data;
  @Input() index: number;
  trans_key: string[] = [];
  trans_value: number[] = [];
  constructor() {  }

  ngOnInit() {

    for (let key in this.transaction.output) {
      this.trans_key.push(key);
      this.trans_value.push(this.transaction.output[key]);
    }

  }

}
