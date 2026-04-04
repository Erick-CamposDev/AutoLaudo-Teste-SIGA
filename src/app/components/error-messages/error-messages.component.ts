import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css'],
})
export class ErrorMessagesComponent {
  @Input() selectedType: string = '';
  radioError: boolean = false;

  validRadioCheck() {
    if (!this.selectedType) {
      this.radioError = true;
      return false;
    }
    this.radioError = false;
    return true;
  }
}
