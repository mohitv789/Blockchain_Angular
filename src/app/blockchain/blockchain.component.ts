import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './blockchain.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit() {
    this.blockchainService.getforService();
  }
}
