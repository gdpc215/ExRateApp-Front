import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TipoCambio } from 'src/app/shared/tipocambio.model';
import { TipoCambioService } from './tipocambio.service';

@Injectable({ providedIn: 'root' })
export class TipoCambioResolverService implements Resolve<TipoCambio[]> {
    constructor(
        private tcService: TipoCambioService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const tcList = this.tcService.getTiposCambio();

        if (tcList.length === 0) {
            return this.tcService.updateListTiposCambio();
        } else {
            return tcList;
        }
    }
}
