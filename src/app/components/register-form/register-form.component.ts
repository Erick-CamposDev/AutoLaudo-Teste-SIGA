import { Component, ViewChild } from '@angular/core';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  selectedType: string = '';
  @ViewChild(ErrorMessagesComponent) errorMessages!: ErrorMessagesComponent;

  showReport() {
    this.errorMessages.validRadioCheck();
  }
}
