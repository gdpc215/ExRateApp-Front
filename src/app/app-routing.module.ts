import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoCambioComponent } from './features/tipocambio/tipocambio.component';
import { TipoCambioEditComponent } from './features/tipocambio/tipocambio-edit/tipocambio-edit.component';
import { TipoCambioDetailComponent } from './features/tipocambio/tipocambio-detail/tipocambio-detail.component';
import { TipoCambioOperacionHistoryComponent } from './features/tipocambiooperacion/tipocambiooperacion-history/tipocambiooperacion-history.component';
import { TipoCambioOperacionComponent } from './features/tipocambiooperacion/tipocambiooperacion.component';
import { TipoCambioOperacionFormComponent } from './features/tipocambiooperacion/tipocambiooperacion-form/tipocambiooperacion-form.component';
import { TipoCambioStartComponent } from './features/tipocambio/tipocambio-start/tipocambio-start.component';
import { TipoCambioResolverService } from './features/tipocambio/tipocambio-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/tipo-cambio', pathMatch: 'full' },
  { path: 'tipo-cambio', component: TipoCambioComponent, children: [
    { path: '', component: TipoCambioStartComponent, resolve: [TipoCambioResolverService] },
    { path: 'nuevo', component: TipoCambioEditComponent },
    { path: ':index', component: TipoCambioDetailComponent, resolve: [TipoCambioResolverService] },
    { path: ':index/editar', component: TipoCambioEditComponent, resolve: [TipoCambioResolverService] }
  ] },
  { path: 'operacion', component: TipoCambioOperacionComponent, children: [
    { path: '', component: TipoCambioOperacionFormComponent, resolve: [TipoCambioResolverService] },
    { path: 'historia', component: TipoCambioOperacionHistoryComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
