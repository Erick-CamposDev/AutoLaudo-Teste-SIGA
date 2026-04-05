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
  @Input() selectedVehicle: any;
  @Input() vehicleName: string = '';
  @Input() vehicleImages: any;
  @Input() visibleReport!: boolean;
  @ViewChild(ReportFormComponent) reportForm!: ReportFormComponent;

  @Output() selectedVehicleInfo = new EventEmitter<any>();
  @Output() reportActive = new EventEmitter<boolean>();
  @Output() formDataEmit = new EventEmitter<any>();
  @Output() closeReportEmit = new EventEmitter<any>();

  formValues: any;

  btnsStates: boolean[] = [false, false];

  toggleBtn(index: number) {
    this.btnsStates[index] = !this.btnsStates[index];
  }

  closeReport() {
    this.closeReportEmit.emit(false);
  }

  receiveValues(data: any) {
    this.formValues = data;
  }

  generateJSON() {
    const json = this.selectedVehicle.map((e: VehicleInformation) => ({
      number: e.numberId,
      piece: e.pieceName,
      rating: e.rating,
    }));

    console.log(json);
    return json;
  }

  generateReport() {
    this.generateJSON();
    this.reportForm.receiveValues();

    this.reportActive.emit(true);
    this.formDataEmit.emit(this.formValues);
    this.selectedVehicleInfo.emit(this.selectedVehicle);
  }
}
