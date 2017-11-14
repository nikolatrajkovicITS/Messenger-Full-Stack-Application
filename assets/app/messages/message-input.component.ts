import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/compiler/src/core';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

    onSave(value: string) {
        
    }
}