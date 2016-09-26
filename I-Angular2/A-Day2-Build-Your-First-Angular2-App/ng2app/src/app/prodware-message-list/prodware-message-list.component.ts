import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/common/message.model';

@Component({
  selector: 'app-prodware-message-list',
  templateUrl: './prodware-message-list.component.html',
  styleUrls: ['./prodware-message-list.component.css']
})
export class ProdwareMessageListComponent implements OnInit {

  ngOnInit() {
  }

  articles: Message[];

  constructor() {
    this.articles = [
      new Message('Angular 2', 'http://angular.io', 3),
      new Message('Fullstack', 'http://fullstack.io', 2),
      new Message('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Message(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Message[] {
    return this.articles.sort((a: Message, b: Message) => b.votes - a.votes);
  }

}
