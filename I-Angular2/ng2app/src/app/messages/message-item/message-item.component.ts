import { Component, OnInit } from '@angular/core';
import { Message } from '../../shared/message.model';

@Component({
  inputs: ['message'],
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  message: Message;

  constructor() { }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.message.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.message.voteDown();
    return false;
  }

}
