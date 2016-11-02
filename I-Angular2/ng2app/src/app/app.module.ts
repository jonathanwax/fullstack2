import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MessageService } from './messages.service';
import { MessagesModule } from './messages/messages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MessagesModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
