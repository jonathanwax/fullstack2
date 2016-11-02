import { Component, OnInit } from '@angular/core';
import { Message } from '../../shared/message.model';
import { MessageService } from '../../messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  ngOnInit() {
  }

  messages: Message[];

  constructor(private messageService: MessageService) {
    this.messageService.getMessages()
      .then(messages => {
        console.log(messages);
        this.messages = messages;
      });


    // function a(messages){
    //   this.messages = messages;
    // }

  }

  sortedMessages(): Message[] {
    if (!this.messages) { return; }
    return this.messages.sort((a: Message, b: Message) => b.votes - a.votes);
  }

}
