import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
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
import { VehicleModel } from 'src/app/models/VehicleModelRating';
import {
  TRUCK_RATING,
  AUTOMOBILE_RATING,
  MOTORCYCLE_RATING,
} from 'src/app/models/RatingTypes';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  selectedType: string = ''; //Verifica o valor do botão selecionado e atribui. Ex: Caminhão, Moto e Automovel.
  @Output() visibleReport = new EventEmitter<boolean>(); // Evento de verificação para saber se o laudo está aberto.
  @Output() selectedVehicle = new EventEmitter<VehicleInformation[]>(); // Pega os valores da interface VehicleInfo.
  @Output() vehicleName = new EventEmitter<string>(); // Pega o nome do veículo selecionado
  @Output() vehicleImages = new EventEmitter<VehicleImages[]>(); // Pega as imagens do veículo selecionado
  @Output() reportActive = new EventEmitter<boolean>(); // Verifica se o relatorio está aberto
  @Output() vehicleRating = new EventEmitter<VehicleModel>(); // Pega os dados das avaliações do veículo
  @ViewChild(ErrorMessagesComponent) errorMessages!: ErrorMessagesComponent; // Pega método validRadioCheck()

  showReport(type: string) {
    /* Função que mostra o laudo com base no parametro, ele seleciona uma das tres opções principais e atribui cada 
    com validações
    */
    const isValid = this.errorMessages.validRadioCheck();
    let selected;
    let images;
    let name;
    let ratingModel;

    if (isValid) {
      // Verifica se um dos botões foram selecionados
      this.visibleReport.emit(true); // Abre o laudo
      this.reportActive.emit(false); // Fecha relatorio e laudo após clicar um dos botões para sair
    } else {
      return;
    }

    switch (
      type // Switch case usado para atribuir os dados de cada veículo
    ) {
      case 'trucks':
        name = 'Caminhão';
        selected = TRUCK_INFO;
        images = TRUCK_IMAGES;
        ratingModel = TRUCK_RATING;
        break;
      case 'motorcycles':
        name = 'Motocicleta';
        selected = MOTORCYCLE_INFO;
        images = MOTORCYCLES_IMAGES;
        ratingModel = MOTORCYCLE_RATING;
        break;
      case 'automobiles':
        name = 'Automóvel';
        selected = AUTOMOBILE_INFO;
        images = AUTOMOBILES_IMAGES;
        ratingModel = AUTOMOBILE_RATING;
        break;
    }

    this.selectedVehicle.emit(selected);
    this.vehicleName.emit(name);
    this.vehicleImages.emit(images);
    this.vehicleRating.emit(ratingModel);
  }
}
