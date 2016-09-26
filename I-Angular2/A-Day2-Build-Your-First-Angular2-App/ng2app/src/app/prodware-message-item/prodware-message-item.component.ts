import { Component } from '@angular/core';
import { Message } from '../shared/common/message.model';

@Component({
  inputs: ['article'],
  selector: 'app-prodware-message-item',
  templateUrl: './prodware-message-item.component.html',
  styleUrls: ['./prodware-message-item.component.css']
})
export class ProdwareMessageItemComponent{

  article: Message;

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
