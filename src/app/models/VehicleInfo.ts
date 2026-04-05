//Interface com as informações do veículo
export interface VehicleInformation {
  numberId: number;
  pieceName: string;
  rating: 'NA' | 'SEM DANOS' | 'DANIFICADA';
}
