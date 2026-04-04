import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.css'],
})
export class MainReportComponent {
  @Input() selectedVehicle: any;
  @Input() vehicleName: string = '';
  @Input() vehicleImages: any;
}
