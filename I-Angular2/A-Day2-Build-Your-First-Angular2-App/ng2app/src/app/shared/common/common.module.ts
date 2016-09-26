import { NgModule } from '@angular/core';
import { Message } from './message.model';
//import { CommonComponent } from './common.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    Message
  ],
  //declarations: [CommonComponent]
})
export class CommonModule { }
