import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { WalletInfo } from '../info/info.model';
import { InfoService } from '../info/info.service';
@Component({
  selector: 'app-conduct-transaction',
  templateUrl: './conduct-transaction.component.html',
  styleUrls: ['./conduct-transaction.component.css']
})
export class ConductTransactionComponent implements OnInit {

  wallet: WalletInfo;
  message = '';
  id: number;
  transactionForm: FormGroup;
  transact_url= 'http://localhost:5000/wallet/transact'

  constructor(
    private infoService: InfoService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.message = ''
    this.infoService.onGetWallet()
    .subscribe((data: WalletInfo) => {
      this.wallet = {
        address: data.address,
        balance:  data.balance
      }
    });
    this.initForm();
  }

  onSubmit() {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({...this.transactionForm.value});
    this.http.post<Data>(this.transact_url, body,{headers:headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    console.log(body)
    this.transactionForm.reset();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let recipient = '';
    let amount = '';


    this.transactionForm = new FormGroup({
      recipient: new FormControl(recipient, Validators.required),
      amount: new FormControl(amount, Validators.required),
    });
  }

}
