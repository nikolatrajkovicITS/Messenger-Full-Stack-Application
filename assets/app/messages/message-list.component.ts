import { Component } from '@angular/compiler/src/core';
import { selector } from 'rxjs/operator/publish';
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    templateUrl:'./message.component.html'
})
export class MessageListComponent {
    messages: Message[] = [
        new Message('Some message', 'Max'),
        new Message('Second message', 'Max')
    ];
}