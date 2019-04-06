import { Component, OnInit } from '@angular/core';
import { CertificadoService } from 'src/app/services/certificado.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent implements OnInit {

  constructor(public http: HttpClient) {
    // this.certificados = ;
    // console.log(this.certificados)
  }

  certs: any;

  getCerts() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
      this.certs = data
    })
  }

  ngOnInit() {

  }

}
