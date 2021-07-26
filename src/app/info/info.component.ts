import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WalletInfo } from './info.model';
import { map, tap} from 'rxjs/operators';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  walletInfo!: WalletInfo; 
  dataFetched = false;
  constructor(private http: HttpClient,private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.onGetWallet()
    .subscribe((data: WalletInfo) => {
      this.dataFetched = true;
      this.walletInfo = {
        address: data.address,
        balance:  data.balance
      }
    });
  }
    
  // showWallet() {
  //   this.infoService.onGetWallet()
  //     .subscribe((data: WalletInfo) => {
  //       this.dataFetched = true;
  //       this.walletInfo = {
  //         address: data.address,
  //         balance:  data.balance
  //     }
  //   });
  // }
}



