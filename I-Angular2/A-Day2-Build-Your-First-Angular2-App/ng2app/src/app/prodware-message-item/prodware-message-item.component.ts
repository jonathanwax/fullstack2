import { Component, OnInit } from '@angular/core';

@Component({
  inputs: ['msg'],
  selector: 'app-prodware-message-item',
  templateUrl: './prodware-message-item.component.html',
  styleUrls: ['./prodware-message-item.component.css']
})
export class ProdwareMessageItemComponent implements OnInit {

  msg: string;

  constructor() { }

  ngOnInit() {
  }

}
