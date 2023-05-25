import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenereadorQrComponent } from './componentes/genereador-qr/genereador-qr.component';
import { LogoComponent } from './componentes/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    GenereadorQrComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
