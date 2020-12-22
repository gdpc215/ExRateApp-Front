import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoCambio } from 'src/app/shared/tipocambio.model';
import { TipoCambioService } from '../tipocambio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tipocambio-list',
  templateUrl: './tipocambio-list.component.html',
  styleUrls: ['./tipocambio-list.component.css']
})
export class TipoCambioListComponent implements OnInit, OnDestroy {
  tcList: TipoCambio[];
  subscription: Subscription;

  constructor(private tcService: TipoCambioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.tcService.tcChanged
      .subscribe(
        (tcList: TipoCambio[]) => {
          this.tcList = tcList;
        }
      );
    this.tcList = this.tcService.getTiposCambio();
  }

  onNewTipoCambio() {
    this.router.navigate(['nuevo'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
