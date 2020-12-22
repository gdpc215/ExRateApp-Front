import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoCambio } from 'src/app/shared/tipocambio.model';
import { TipoCambioService } from '../../tipocambio/tipocambio.service';
import { TipoCambioOperacionService } from '../tipocambiooperacion.service';
import { TipoCambioOperacion } from 'src/app/shared/tipocambiooperacion.model';

@Component({
  selector: 'app-tipocambiooperacion-form',
  templateUrl: './tipocambiooperacion-form.component.html',
  styleUrls: ['./tipocambiooperacion-form.component.css']
})
export class TipoCambioOperacionFormComponent implements OnInit {

  tcoForm: FormGroup;
  tcList: TipoCambio[];
  tcoOperacion: TipoCambioOperacion;

  constructor(private tcService: TipoCambioService, private tcoService: TipoCambioOperacionService) { }

  ngOnInit(): void {
    this.tcList = this.tcService.getTiposCambio();
    this.initForm();
  }

  private initForm() {
    const tcoMonedaOrigen = '';
    const tcoMonedaDestino = '';
    const tcoMonto = 0.00;

    this.tcoForm = new FormGroup({
      monedaOrigen: new FormControl(tcoMonedaOrigen, Validators.required),
      monedaDestino: new FormControl(tcoMonedaDestino, Validators.required),
      monto: new FormControl(tcoMonto, Validators.required)
    });
  }

  onSubmit() {
    this.tcoOperacion = null;
    const tcoItem = new TipoCambioOperacion(
      0,
      this.tcoForm.value.monto,
      0,
      this.tcoForm.value.monedaOrigen,
      this.tcoForm.value.monedaDestino,
      0,
      new Date()
    );
    this.tcoService
      .addTipoCambioOperacion(tcoItem)
      .subscribe((responseData: TipoCambioOperacion) => {
        console.log(responseData);
        this.tcoService.updateListTipoCambioOperaciones().subscribe();
        this.tcoOperacion = responseData;
      });
  }

  onClean() {
    this.tcoOperacion = null;
    this.initForm();
  }
}
