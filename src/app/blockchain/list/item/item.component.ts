import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../../block.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() block: Block;
  @Input() index: number;
  timestampdate: Date;
  constructor() { }

  ngOnInit() {
    this.timestampdate  = new Date(this.block.timestamp * 1000)
  }


}
