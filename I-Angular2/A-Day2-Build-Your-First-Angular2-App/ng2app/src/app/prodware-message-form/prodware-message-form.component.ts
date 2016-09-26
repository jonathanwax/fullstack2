import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/common/message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-prodware-message-form',
  templateUrl: './prodware-message-form.component.html',
  styleUrls: ['./prodware-message-form.component.css']
})
export class ProdwareMessageFormComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  addMessage(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    //this.articles.push(new Message(title.value, link.value, 0));
    this.messageService.addMessage(new Message(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  ngOnInit() {
  }

}
