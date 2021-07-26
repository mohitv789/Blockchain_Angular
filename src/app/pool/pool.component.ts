import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionPoolReceipt } from './transaction-pool-receipt.model';
import { Block } from '../blockchain/block.model';

import { PoolService } from './pool.service';
import { timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Data } from '../blockchain/data.model';
@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {

  pool_url= `http://localhost:5000/transactions`
  mining_url= `http://localhost:5000/blockchain/mine`

  showpool = false;
  minedblock = false;
  public block: Block;
  public receipt: TransactionPoolReceipt;

  constructor(private http: HttpClient,private poolService: PoolService) {
    this.block = new Block([],0,"","",0,0);
    this.receipt = new TransactionPoolReceipt();
  }

  ngOnInit() {
  }

  showPool() {
    this.poolService.onShowPool().pipe().subscribe((data: TransactionPoolReceipt) => {
      if (!data || !data[0]) {
        console.log("No Data in Pool")
      } else {
        this.showpool = true;
        this.receipt.id = data[0]["id"],
        this.receipt.address = data[0]["input"].address,
        this.receipt.amount = data[0]["input"].amount,
        this.receipt.public_key = data[0]["input"].public_key,
        this.receipt.timestamp = data[0]["input"].timestamp,
        // data[0]["input"].signature.forEach(item => this.receipt.signature.push(item));
        this.receipt.output = {...data[0]["output"]}
        // console.log(this.receipt)
    }})
  }

  mineBlock() {
    this.poolService.onDoMine().pipe().subscribe((obj:Block) => {
      if (obj.data == null) {
        return throwError("null data")
      } else {
        obj["data"].forEach((item) => {
          this.block.data.push({...item})
        });
        this.block.timestamp = obj["timestamp"]
        this.block.last_hash = obj["last_hash"]
        this.block.hash = obj["hash"]
        this.block.nonce = obj["nonce"]
        this.block.difficulty = obj["difficulty"]
        this.minedblock = true;
        console.log(this.block);
        return true;
      }
    })
  };
}


