import { Component, OnInit, Input } from '@angular/core';
import { TipoCambio } from 'src/app/shared/tipocambio.model';

@Component({
  selector: 'app-tipocambio-item',
  templateUrl: './tipocambio-item.component.html',
  styleUrls: ['./tipocambio-item.component.css']
})
export class TipoCambioItemComponent implements OnInit {

  @Input() tc: TipoCambio;
  @Input() index: number;

  ngOnInit(): void { }
}
