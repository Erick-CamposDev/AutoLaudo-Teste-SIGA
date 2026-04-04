import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component';
import {
  TRUCK_INFO,
  AUTOMOBILE_INFO,
  MOTORCYCLE_INFO,
} from 'src/app/models/ChecklistTypes';
import { VehicleInformation } from 'src/app/models/VehicleInfo';
import {
  TRUCK_IMAGES,
  AUTOMOBILES_IMAGES,
  MOTORCYCLES_IMAGES,
} from 'src/app/models/ImagesTypes';
import { VehicleImages } from 'src/app/models/VehicleImgs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  selectedType: string = '';
  @Output() visibleReport = new EventEmitter<boolean>();
  @Output() selectedVehicle = new EventEmitter<VehicleInformation[]>();
  @Output() vehicleName = new EventEmitter<string>();
  @Output() vehicleImages = new EventEmitter<VehicleImages[]>();
  @ViewChild(ErrorMessagesComponent) errorMessages!: ErrorMessagesComponent;

  showReport(type: string) {
    const isValid = this.errorMessages.validRadioCheck();
    let selected;
    let images;
    let name;

    if (isValid) {
      this.visibleReport.emit(true);
    } else {
      return;
    }

    switch (type) {
      case 'trucks':
        name = 'Caminhão';
        selected = TRUCK_INFO;
        images = TRUCK_IMAGES;
        break;
      case 'motorcycles':
        name = 'Motocicleta';
        selected = MOTORCYCLE_INFO;
        images = MOTORCYCLES_IMAGES;
        break;
      case 'automobiles':
        name = 'Automóvel';
        selected = AUTOMOBILE_INFO;
        images = AUTOMOBILES_IMAGES;
        break;
    }

    this.selectedVehicle.emit(selected);
    this.vehicleName.emit(name);
    this.vehicleImages.emit(images);
  }
}
