import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ReportFormComponent } from '../report-form/report-form.component';
import { VehicleInformation } from 'src/app/models/VehicleInfo';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.css'],
})
export class MainReportComponent {
  @Input() selectedVehicle: any; //Interface do Veiculo com os dados selcionados
  @Input() vehicleName: string = ''; // Nome do Veículo
  @Input() vehicleImages: any; // Imagens do Veículo
  @Input() visibleReport!: boolean; // Verificação se o Laudo está aberto ou não
  @ViewChild(ReportFormComponent) reportForm!: ReportFormComponent; // Pegando método receiveValues() do componente filho

  @Output() selectedVehicleInfo = new EventEmitter<any>(); // interface do veículo para ser mandado para o componente pai
  @Output() reportActive = new EventEmitter<boolean>(); // Verificação para saber se o relatório está ativo ou não
  @Output() formDataEmit = new EventEmitter<any>(); // Evento para mandar os dados do formulario para o relatório
  @Output() closeReportEmit = new EventEmitter<any>(); // Evento para fechar o laudo + relatório

  formValues: any;

  btnsStates: boolean[] = [false, false];

  toggleBtn(index: number) {
    this.btnsStates[index] = !this.btnsStates[index]; //Função para fechar divs com imagem
  }

  closeReport() {
    this.closeReportEmit.emit(false); // Função para fechar o laudo + Relatório
  }

  receiveValues(data: any) {
    // Função para receber os valores do formulario
    this.formValues = data;
  }

  generateJSON() {
    // Função para geração do JSON
    const json = this.selectedVehicle.map((e: VehicleInformation) => ({
      number: e.numberId,
      piece: e.pieceName,
      rating: e.rating,
    }));

    console.log(json);
    return json;
  }

  generateReport() {
    // Função para gerar o relatório
    this.generateJSON();
    this.reportForm.receiveValues();

    this.reportActive.emit(true);
    this.formDataEmit.emit(this.formValues);
    this.selectedVehicleInfo.emit(this.selectedVehicle);
  }
}
