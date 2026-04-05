import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teste-siga';

  visibleReport: boolean = false;
  selectedVehicle: any;
  vehicleName: string = '';
  vehicleImages: any;
  vehicleInfo: any;
  vehicleRating: any;
  formData: any;
  reportActive: boolean = false;
  closeReportEmit!: boolean;

  closeAll() {
    // Função para fechar ambos o laudo e relatório
    this.reportActive = false;
    this.visibleReport = false;
  }
}
