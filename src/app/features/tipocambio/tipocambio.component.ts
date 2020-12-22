import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-tipocambio',
  templateUrl: './tipocambio.component.html',
  styleUrls: ['./tipocambio.component.css']
})
export class TipoCambioComponent implements OnInit {

  constructor(private dsService: DataStorageService) { }

  ngOnInit(): void {
    this.dsService.dsGetTiposCambio().subscribe();
  }

}
