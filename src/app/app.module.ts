import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CertificadoComponent } from './components/certificado/certificado.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,    
    CertificadoComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
