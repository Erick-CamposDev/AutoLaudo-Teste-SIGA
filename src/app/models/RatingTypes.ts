import { VehicleModel } from './VehicleModelRating';

export const MOTORCYCLE_RATING: VehicleModel = {
  title: 'MOTOCICLETAS',
  subtitle: 'PEÇAS ESTRUTURAIS AVARIADAS NO ACIDENTE',
  ratings: {
    rating1: 'Quantidade de peças estruturais danficadas = 0',
    rating2: 'Quantidade de peças estruturais danficadas de 1 a 4',
    rating3: 'Quantidade de peças estruturais danficadas maior que 4',
  },
};

export const AUTOMOBILE_RATING: VehicleModel = {
  title: 'AUTOMÓVEIS, CAMIONETAS E CAMIONETES',
  subtitle: 'PEÇAS ESTRUTURAIS/SEGURANÇA PASSIVA AVARIADAS NO ACIDENTE',
  ratings: {
    rating1: 'Quantidade de peças estruturais/seg. pass. danficadas de 0 a 1',
    rating2: 'Quantidade de peças estruturais/seg. pass. danficadas de 2 a 6',
    rating3:
      'Quantidade de peças estruturais/seg. pass. danficadas maior que 6',
  },
};

export const TRUCK_RATING: VehicleModel = {
  title: 'CAMINHÕES',
  subtitle: 'PEÇAS ESTRUTURAIS/SEGURANÇA PASSIVA AVARIADAS NO ACIDENTE',
  ratings: {
    rating1: 'Quantidade de peças estruturais/seg. pass. danficadas de 0 a 1',
    rating2: 'Quantidade de peças estruturais/seg. pass. danficadas de 2 a 6',
    rating3:
      'Quantidade de peças estruturais/seg. pass. danficadas maior que 6',
  },
};
