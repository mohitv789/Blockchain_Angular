import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';
import { TransactionPoolReceipt } from './transaction-pool-receipt.model';
import { Block } from '../blockchain/block.model';

@Injectable()
export class PoolService {
    pool_url= `http://localhost:5000/transactions`
    mining_url= `http://localhost:5000/blockchain/mine`

  constructor(private http: HttpClient) {}

  onShowPool() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<TransactionPoolReceipt>(this.pool_url, httpOptions)
  }

  onDoMine() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<Block>(this.mining_url,httpOptions)
  }
}
