import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent {
  @Output() fieldValues = new EventEmitter<any>();
  agentName: string = '';
  register: string = '';
  agentNumber: string = '';
  observation: string = '';

  btnState: boolean = false;

  toggleBtn() {
    this.btnState = !this.btnState;
  }

  receiveValues() {
    this.fieldValues.emit({
      agentName: this.agentName,
      register: this.register,
      agentNumber: this.agentNumber,
      observation: this.observation,
    });
    this.clean();
  }

  clean() {
    this.agentName = '';
    this.register = '';
    this.agentNumber = '';
    this.observation = '';
  }
}
