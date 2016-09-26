import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/common/message.model';

@Component({
  selector: 'app-prodware-message-form',
  templateUrl: './prodware-message-form.component.html',
  styleUrls: ['./prodware-message-form.component.css']
})
export class ProdwareMessageFormComponent implements OnInit {

  constructor() { }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    //this.articles.push(new Message(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  ngOnInit() {
  }

}
