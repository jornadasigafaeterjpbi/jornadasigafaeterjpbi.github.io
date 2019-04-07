import { Component, OnInit } from '@angular/core';
import { CertificadoService } from 'src/app/services/certificado.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
  aluno_email: string;
  processando: any;

  getCerts() {
    this.certs = null;
    if(this.aluno_email == '' || this.aluno_email == null) {
      Swal.fire('Oops!', 'Preencha o campo de e-mail corretamente.', 'error');
      return false;
    }
    this.processando = true;
    console.log(this.aluno_email)
    this.http.get("https://jornadasiga.herokuapp.com/api/v1/certificados/" + this.aluno_email).subscribe((data) => {      
      if(data['status'] == 'error') {
        Swal.fire('Oops!', data['data'], 'warning');
      }
      else {
        this.certs = data['data']
      }
      this.processando = null;
    })
  }

  ngOnInit() {

  }

}
