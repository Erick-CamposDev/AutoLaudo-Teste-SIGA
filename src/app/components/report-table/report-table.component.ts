import { Component, Input } from '@angular/core';
import { VehicleInformation } from 'src/app/models/VehicleInfo';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
})
export class ReportTableComponent {
  @Input() vehicleInfo: VehicleInformation[] = []; //Interface do veículo com seus atributos e dados
  @Input() vehicleRating: any; //Interface com atributos de avaliações do veículo
  @Input() formData: any; //Dados do formulario recebidos
  leftItems: any[] = []; //Array para dividir a primeira metade do array principal
  rightItems: any[] = []; //Array para dividir a segunda metade do array principal

  ngOnChanges() {
    //Função para dividir o array principal em dois arrays separados
    const half = Math.ceil(this.vehicleInfo.length / 2);
    this.leftItems = this.vehicleInfo.slice(0, half);
    this.rightItems = this.vehicleInfo.slice(half);
  }
}
