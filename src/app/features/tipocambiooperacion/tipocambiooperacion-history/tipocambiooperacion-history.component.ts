import { Component, OnInit, OnDestroy } from '@angular/core';
import { TipoCambioOperacionService } from '../tipocambiooperacion.service';
import { TipoCambioOperacion } from 'src/app/shared/tipocambiooperacion.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tipocambiooperacion-history',
  templateUrl: './tipocambiooperacion-history.component.html',
  styleUrls: ['./tipocambiooperacion-history.component.css']
})
export class TipoCambioOperacionHistoryComponent implements OnInit, OnDestroy {

  tcoHistorico: TipoCambioOperacion[];
  subscription: Subscription;

  constructor(private tcoService: TipoCambioOperacionService) { }

  ngOnInit() {
    // Carga inicial
    this.tcoService
      .updateListTipoCambioOperaciones()
      .subscribe(
        (tcoList: TipoCambioOperacion[]) => {
          this.tcoHistorico = tcoList.sort((a, b) => a.ejecucion > b.ejecucion ? -1 : 1);
        }
      );
    // Futuros cambios
    this.tcoService.tcoChanged
      .subscribe(
        (tcoList: TipoCambioOperacion[]) => {
          this.tcoHistorico = tcoList.sort((a, b) => a.ejecucion > b.ejecucion ? -1 : 1);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
