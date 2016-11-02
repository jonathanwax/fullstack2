import { Injectable, OnInit } from '@angular/core';
import { Message } from './shared/message.model';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService implements OnInit {

    messages: Message[];

    constructor(private http: Http) {
        this.messages = [
            new Message('Angular 2', 'http://angular.io', 3),
            new Message('Fullstack', 'http://fullstack.io', 2),
            new Message('Angular Homepage', 'http://angular.io', 1)
        ];
    }

    addMessage(message: Message) {
        this.messages.push(message);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getMessages(): Promise<Message[]> {
        // return Promise.resolve(this.messages);
        // return this.http.get("https://demo2640180.mockable.io/messages")
        //     .toPromise()
        //     .catch(this.handleError);


        return this.http.get("https://demo2640180.mockable.io/messages")
            .toPromise()
            .then(response => {
                var j = response.json();
                // var d = j.data;
                var m = j as Message[];
                return m;
                //response.json().data as Message[];
            })
            .catch(this.handleError);
    }

    ngOnInit() {
    }

}
