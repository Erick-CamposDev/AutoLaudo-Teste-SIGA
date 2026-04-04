import { Component, Input } from '@angular/core';
import { VehicleInformation } from 'src/app/models/VehicleInfo';

@Component({
  selector: 'app-table-checklist',
  templateUrl: './table-checklist.component.html',
  styleUrls: ['./table-checklist.component.css'],
})
export class TableChecklistComponent {
  @Input() vehicle: VehicleInformation[] = [];

  setDamage(
    rating: 'NA' | 'SEM DANOS' | 'DANIFICADA',
    piece: (typeof this.vehicle)[number],
  ) {
    piece.rating = rating;
  }
}
