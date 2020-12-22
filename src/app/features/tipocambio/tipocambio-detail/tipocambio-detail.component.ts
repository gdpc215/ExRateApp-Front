import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TipoCambio } from 'src/app/shared/tipocambio.model';
import { TipoCambioService } from '../tipocambio.service';

@Component({
  selector: 'app-tipocambio-detail',
  templateUrl: './tipocambio-detail.component.html',
  styleUrls: ['./tipocambio-detail.component.css']
})
export class TipoCambioDetailComponent implements OnInit {

  tcItem: TipoCambio;
  index: number;

  constructor(private tcService: TipoCambioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params.index;
        this.tcItem = this.tcService.getTipoCambioIndex(this.index);
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }
}
