import { NgModule } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
//import { CommonComponent } from './common.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    Message,
    MessageService
  ],
  //declarations: [CommonComponent]
})
export class CommonModule { }
