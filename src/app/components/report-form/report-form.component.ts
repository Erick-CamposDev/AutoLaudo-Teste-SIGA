import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent {
  @Output() fieldValues = new EventEmitter<any>(); //Evento para guardar os dados do formulario
  agentName: string = '';
  register: string = '';
  agentNumber: string = '';
  observation: string = '';

  btnState: boolean = false;

  toggleBtn() {
    // Função para abrir e fechar formulario
    this.btnState = !this.btnState;
  }

  receiveValues() {
    //Recebe os valores e guarda eles em um objeto
    this.fieldValues.emit({
      agentName: this.agentName,
      register: this.register,
      agentNumber: this.agentNumber,
      observation: this.observation,
    });
    this.clean();
  }

  clean() {
    //Limpa o formulario depois de clicar no botão
    this.agentName = '';
    this.register = '';
    this.agentNumber = '';
    this.observation = '';
  }
}
