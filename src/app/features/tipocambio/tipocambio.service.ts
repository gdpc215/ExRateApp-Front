import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TipoCambio } from 'src/app/shared/tipocambio.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TipoCambioService {
    private tcList: TipoCambio[] = [];
    tcChanged = new Subject<TipoCambio[]>();

    constructor(private dsService: DataStorageService) { }

    updateListTiposCambio() {
        console.log('Service - Update started');
        return this.dsService
            .dsGetTiposCambio()
            .pipe(
                tap((tcList: TipoCambio[]) => {
                    this.setTiposCambio(tcList);
                    console.log('Service - Update complete');
                })
            );
    }

    setTiposCambio(tcList: TipoCambio[]) {
        this.tcList = tcList;
        this.tcChanged.next(this.tcList.slice());
    }

    getTiposCambio() {
        return this.tcList.slice();
    }

    getTipoCambio(id: number) {
        return (this.tcList.find(x => x.id = id)) as TipoCambio;
    }

    getTipoCambioIndex(index: number) {
        return this.tcList[index];
    }

    getTipoCambioMoneda(moneda: string) {
        return (this.tcList.find(x => x.moneda === moneda)) as TipoCambio;
    }

    addTipoCambio(tipoCambio: TipoCambio) {
        this.tcList.push(tipoCambio);
        this.tcChanged.next(this.tcList.slice());

        this.dsService
            .dsAddTipoCambio(tipoCambio)
            .subscribe(responseData => {
                console.log(responseData);
                this.updateListTiposCambio().subscribe();
            });
    }

    updateTipoCambio(index: number, newTipoCambio: TipoCambio) {
        const id = this.tcList[index].id;
        console.log(index);
        console.log(id);

        this.tcList[index] = newTipoCambio;
        this.tcChanged.next(this.tcList.slice());

        this.dsService
            .dsUpdateTipoCambio(id, newTipoCambio)
            .subscribe(responseData => {
                console.log(responseData);
                this.updateListTiposCambio().subscribe();
            });
    }
}
