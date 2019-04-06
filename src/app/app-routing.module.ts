import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CertificadoComponent } from './components/certificado/certificado.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'certificados', component: CertificadoComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
