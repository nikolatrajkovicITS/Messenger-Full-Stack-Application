import { Message } from './message.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message-list.component.html',
})
export class MessageComponent {
  @Input() message: Message;
  @Output() editClicked = new EventEmitter<string>(); 
  color = 'red';

  onEdit() {
      this.editClicked.emit('A new value');   // "emit() means emit a new event" 
  }
 }