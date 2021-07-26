import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map,tap } from 'rxjs/operators';
import { Block } from './block.model';


@Injectable()
export class BlockchainService {
  blockchain_url= 'http://localhost:5000/blockchain'    
  length_url= 'http://localhost:5000/blockchain/length'  
  
  private availableBlocks: Block[] = [];

  constructor(private http: HttpClient) {
    
  }
  getBlockchain() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<Block[]>(this.blockchain_url,httpOptions)        
  }
  getforService() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<Block[]>(this.blockchain_url,httpOptions).subscribe(
      data => {data.forEach( (dataObj) => {
        this.availableBlocks.push({
          ...dataObj
        })
      })
    })
  }

  getBlock(index: number) {
    return this.availableBlocks[index];
  }

  getLength() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get<number>(this.length_url,httpOptions).pipe(map(len => {return len}))
  }

}
