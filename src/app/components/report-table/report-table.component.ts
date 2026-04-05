import { Component, Input } from '@angular/core';
import { VehicleInformation } from 'src/app/models/VehicleInfo';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
})
export class ReportTableComponent {
  @Input() vehicleInfo: VehicleInformation[] = [];
  @Input() vehicleRating: any;
  @Input() formData: any;
  leftItems: any[] = [];
  rightItems: any[] = [];

  ngOnChanges() {
    const half = Math.ceil(this.vehicleInfo.length / 2);
    this.leftItems = this.vehicleInfo.slice(0, half);
    this.rightItems = this.vehicleInfo.slice(half);
  }
}
