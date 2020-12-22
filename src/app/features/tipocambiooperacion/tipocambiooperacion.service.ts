import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TipoCambioOperacion } from '../../shared/tipocambiooperacion.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TipoCambioOperacionService {
    tcoChanged = new Subject<TipoCambioOperacion[]>();

    private tcoList: TipoCambioOperacion[] = [];

    constructor(private dsService: DataStorageService) { }

    updateListTipoCambioOperaciones() {
        console.log('Service - Update started');
        return this.dsService
            .dsGetTipoCambioOperaciones()
            .pipe(
                tap((tcList: TipoCambioOperacion[]) => {
                    this.setTipoCambioOperaciones(tcList);
                    console.log('Service - Update complete');
                })
            );
    }

    setTipoCambioOperaciones(tcoList: TipoCambioOperacion[]) {
        this.tcoList = tcoList;
        this.tcoChanged.next(this.tcoList.slice());
    }

    getTiposCambioOperacion() {
        return this.tcoList.slice();
    }

    getTipoCambioOperacion(id: number) {
        return this.tcoList[id];
    }

    addTipoCambioOperacion(tco: TipoCambioOperacion) {
        this.tcoList.push(tco);
        this.tcoChanged.next(this.tcoList.slice());

        return this.dsService
            .dsAddTipoCambioOperacion(tco);
    }
}
