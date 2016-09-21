import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  list: any[];

  //title = 'app works!';

  constructor(){
    this.title = "shalom";
    //this.list = ['Avi', 'Jonathan', 'Gal', 'Shahar'];
    this.list = [{name: 'Avi', age: 10}, {name: 'Gal', age: 20}];
  }

}
