import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  constructor(private http: HttpClient) { }

  getCerts(email_aluno: string) {
    // return this.http.get('localhost/jornadasiga-api/public/api/v1/certificados/');
  }

}
