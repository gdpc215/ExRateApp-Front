import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TipoCambioComponent } from './features/tipocambio/tipocambio.component';
import { TipoCambioOperacionComponent } from './features/tipocambiooperacion/tipocambiooperacion.component';
import { TipoCambioListComponent } from './features/tipocambio/tipocambio-list/tipocambio-list.component';
import { TipoCambioEditComponent } from './features/tipocambio/tipocambio-edit/tipocambio-edit.component';
import { TipoCambioDetailComponent } from './features/tipocambio/tipocambio-detail/tipocambio-detail.component';
import { TipoCambioOperacionHistoryComponent } from './features/tipocambiooperacion/tipocambiooperacion-history/tipocambiooperacion-history.component';
import { TipoCambioOperacionFormComponent } from './features/tipocambiooperacion/tipocambiooperacion-form/tipocambiooperacion-form.component';
import { TipoCambioStartComponent } from './features/tipocambio/tipocambio-start/tipocambio-start.component';
import { TipoCambioItemComponent } from './features/tipocambio/tipocambio-list/tipocambio-item/tipocambio-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TipoCambioComponent,
    TipoCambioOperacionComponent,
    TipoCambioListComponent,
    TipoCambioEditComponent,
    TipoCambioDetailComponent,
    TipoCambioOperacionHistoryComponent,
    TipoCambioOperacionFormComponent,
    TipoCambioStartComponent,
    TipoCambioItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
