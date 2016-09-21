import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodware-message-list',
  templateUrl: './prodware-message-list.component.html',
  styleUrls: ['./prodware-message-list.component.css']
})
export class ProdwareMessageListComponent implements OnInit {

  messages: any[];

  constructor() { 
    this.messages= ["message 1", "message 2", "message 3"];
  }

  ngOnInit() {
  }

}
