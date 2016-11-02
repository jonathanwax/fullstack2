import { Component, OnInit } from '@angular/core';
import { Message } from '../../shared/message.model';
import { MessageService } from '../../messages.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  addMessage(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding message title: ${title.value} and link: ${link.value}`);
    //this.messages.push(new Message(title.value, link.value, 0));
    this.messageService.addMessage(new Message(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  ngOnInit() {
  }

}
