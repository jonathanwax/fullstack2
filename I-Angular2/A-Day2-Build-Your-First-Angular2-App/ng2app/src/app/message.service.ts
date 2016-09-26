import { Injectable, OnInit } from '@angular/core';
import { Message } from './shared/common/message.model';

@Injectable()
export class MessageService implements OnInit {

  messages: Message[];

  constructor() {
    this.messages = [
      new Message('Angular 2', 'http://angular.io', 3),
      new Message('Fullstack', 'http://fullstack.io', 2),
      new Message('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  addMessage(message:Message){
    this.messages.push(message);
  }

  getMessages(): Promise<Message[]> {
    return Promise.resolve(this.messages);
  }

  ngOnInit() {
  }

}
