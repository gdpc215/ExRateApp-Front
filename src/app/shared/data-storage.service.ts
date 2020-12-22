import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoCambio } from './tipocambio.model';
import { map } from 'rxjs/operators';
import { TipoCambioOperacion } from './tipocambiooperacion.model';
import { TipoCambioSolicitud } from './tipocambiosolicitud.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  apiBaseRoute = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  dsGetTiposCambio() {
    const endPoint = 'tipocambio';

    return this.httpClient
      .get<TipoCambio[]>(this.apiBaseRoute + endPoint)
      .pipe(
        map((responseData) => {
          const tcList: TipoCambio[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              tcList.push(responseData[key]);
            }
          }
          return tcList;
        })
      );
  }

  dsAddTipoCambio(tipoCambio: TipoCambio) {
    const endPoint = 'tipocambio';

    return this.httpClient
      .post<TipoCambio[]>(this.apiBaseRoute + endPoint, tipoCambio);
  }

  dsUpdateTipoCambio(id: number, tipoCambio: TipoCambio) {
    const endPoint = 'tipocambio' + '/moneda/' + id;

    console.log('dsUpdateTipoCambio');
    console.log(tipoCambio);

    return this.httpClient
      .put<TipoCambio>(this.apiBaseRoute + endPoint, tipoCambio);
  }

  dsGetTipoCambioOperaciones() {
    const endPoint = 'operacion/historia';

    return this.httpClient
      .get<TipoCambioOperacion[]>(this.apiBaseRoute + endPoint)
      .pipe(
        map((responseData) => {
          const tcoList: TipoCambioOperacion[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              tcoList.push(responseData[key]);
            }
          }
          return tcoList;
        })
      );
  }

  dsAddTipoCambioOperacion(tipoCambioSolicitud: TipoCambioSolicitud) {
    const endPoint = 'operacion/cambio';

    return this.httpClient
      .post<TipoCambioOperacion>(this.apiBaseRoute + endPoint, tipoCambioSolicitud);
  }
}



