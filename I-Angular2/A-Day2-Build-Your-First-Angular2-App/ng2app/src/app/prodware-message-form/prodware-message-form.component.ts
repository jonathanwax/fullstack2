import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodware-message-form',
  templateUrl: './prodware-message-form.component.html',
  styleUrls: ['./prodware-message-form.component.css']
})
export class ProdwareMessageFormComponent implements OnInit {

  constructor() { }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) : boolean{
    let t = title.value;
    let l = link.value;

    console.log(`Shalom ${title.value}`);

    return false;

  }

  ngOnInit() {
  }

}
