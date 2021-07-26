
import { Component, Input, OnInit } from '@angular/core';

import { Block } from '../../blockchain/block.model';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {
  @Input() block: Block;
  constructor() { }

  ngOnInit() {

  }

}
