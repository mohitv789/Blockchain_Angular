import { Component, OnInit } from '@angular/core';
import { Block } from '../block.model';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  blockchain: Block[] = [];
  dataFetched = false;
  constructor(private blockchainService: BlockchainService) { }

  ngOnInit() {
  }

  showBlockchain() {
    this.blockchainService.getBlockchain()
    .subscribe(
      data => {data.forEach( (dataObj) => {
        this.blockchain.push({
          ...dataObj
        })
      })
    })
    this.dataFetched = true;
    
  }

}
