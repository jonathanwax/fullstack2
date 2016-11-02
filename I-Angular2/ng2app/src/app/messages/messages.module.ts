import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';

import { MessageFormComponent } from './message-form/message-form.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MessagesComponent
  ],
  declarations: [
    MessagesComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageItemComponent
  ]
})
export class MessagesModule { }
