import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';
import { WalletInfo } from './info.model';

@Injectable()
export class InfoService {
  info_url= 'http://localhost:5000/wallet/info'  


 
  constructor(private http: HttpClient) {
    
  }
  onGetWallet() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<WalletInfo>(this.info_url,httpOptions);        
  }
}
