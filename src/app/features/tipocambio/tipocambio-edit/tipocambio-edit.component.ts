import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TipoCambio } from 'src/app/shared/tipocambio.model';
import { TipoCambioService } from '../tipocambio.service';

@Component({
  selector: 'app-tipocambio-edit',
  templateUrl: './tipocambio-edit.component.html',
  styleUrls: ['./tipocambio-edit.component.css']
})
export class TipoCambioEditComponent implements OnInit {

  editMode = false;
  tcForm: FormGroup;
  index: number;

  constructor(private route: ActivatedRoute, private tcService: TipoCambioService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params.index;
        console.log(this.index);
        this.editMode = params.index != null;
        this.initForm();
        // console.log(this.editMode);
      }
    );
  }

  onSubmit() {
    const tcItem = new TipoCambio(
      0,
      this.tcForm.value.moneda,
      this.tcForm.value.cambio,
      new Date(),
      this.tcForm.value.origen
    );
    if (this.editMode) {
      this.tcService.updateTipoCambio(this.index, tcItem);
    } else {
      this.tcService.addTipoCambio(tcItem);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let tcMoneda = '';
    let tcCambio = 0.00;
    let tcOrigen = '';

    if (this.editMode) {
      const tcItem = this.tcService.getTipoCambioIndex(this.index);
      console.log(tcItem);

      tcMoneda = tcItem.moneda;
      tcCambio = tcItem.cambio;
      tcOrigen = tcItem.origen;
    }

    this.tcForm = new FormGroup({
      moneda: new FormControl(tcMoneda, Validators.required),
      cambio: new FormControl(tcCambio, Validators.required),
      origen: new FormControl(tcOrigen, Validators.required)
    });
  }
}
