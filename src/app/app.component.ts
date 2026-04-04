import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'meu-projeto';

  visibleReport: boolean = false;
  selectedVehicle: any;
  vehicleName: string = '';
  vehicleImages: any;
}
