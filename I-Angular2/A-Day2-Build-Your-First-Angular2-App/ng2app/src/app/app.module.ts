import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProdwareMessageComponent } from './prodware-message/prodware-message.component';
import { ProdwareMessageFormComponent } from './prodware-message-form/prodware-message-form.component';
import { ProdwareMessageListComponent } from './prodware-message-list/prodware-message-list.component';
import { ProdwareMessageItemComponent } from './prodware-message-item/prodware-message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdwareMessageComponent,
    ProdwareMessageFormComponent,
    ProdwareMessageListComponent,
    ProdwareMessageItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
