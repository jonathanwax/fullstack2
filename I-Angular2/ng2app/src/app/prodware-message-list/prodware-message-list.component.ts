import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/common/message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-prodware-message-list',
  templateUrl: './prodware-message-list.component.html',
  styleUrls: ['./prodware-message-list.component.css'],
})
export class ProdwareMessageListComponent implements OnInit {

  ngOnInit() {
  }

  messages: Message[];

  constructor(private messageService: MessageService) {
    this.messageService.getMessages().then(messages => this.messages = messages);
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);      
  }

  sortedMessages(): Message[] {
    if (!this.messages) { return; }
    return this.messages.sort((a: Message, b: Message) => b.votes - a.votes);
  }

}
