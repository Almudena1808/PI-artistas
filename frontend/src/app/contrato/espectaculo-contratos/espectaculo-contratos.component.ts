import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrato } from 'src/app/models/contrato';
import { ContratoService } from 'src/app/services/contrato.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-espectaculo-contratos',
  templateUrl: './espectaculo-contratos.component.html',
  styleUrls: ['./espectaculo-contratos.component.css']
})
export class EspectaculoContratosComponent implements OnInit {

  id: number=0;

  contratos: Contrato[] = [];
  listaVacia: boolean = true;
  isArtista: boolean = false;
  idUser: number = 0;
  

  constructor(
    private contratoService: ContratoService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cargarContratos(id);
    this.isArtista = this.tokenService.isArtista();
    this.idUser= this.tokenService.getIdUsuario();
  }

  cargarContratos(id:number): void {
    this.contratoService.esp(id).subscribe(
      data => {
        this.contratos = data;
        console.log(data);
        if(data.length!=0)this.listaVacia = false;
      },
      err => {
       // this.listaVacia = err.error.message;
      }
    );
  }

}
