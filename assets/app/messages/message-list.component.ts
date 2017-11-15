import { Component, OnInit } from '@angular/core';
import { selector } from 'rxjs/operator/publish';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message-list',
    templateUrl:'./message.component.html'
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.messages = this.messageService.getMessages();
    }
}