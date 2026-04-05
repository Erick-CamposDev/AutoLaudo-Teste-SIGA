import { VehicleRating } from './VehicleRating';
//Interface para modelo de veículo

export interface VehicleModel {
  title: string;
  subtitle: string;
  ratings: VehicleRating;
}
