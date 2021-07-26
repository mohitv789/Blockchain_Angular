import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Block } from '../block.model';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  block: Block;
  id: number;
  timestampdate: Date;
  constructor(private blockchainService: BlockchainService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.block = this.blockchainService.getBlock(this.id);
        }
      );
      this.timestampdate  = new Date(this.block.timestamp * 1000)
  }

}
