import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrato } from 'src/app/models/contrato';
import { Espectaculo } from 'src/app/models/espectaculo';
import { ContratoService } from 'src/app/services/contrato.service';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-emp-mis-contratos',
  templateUrl: './emp-mis-contratos.component.html',
  styleUrls: ['./emp-mis-contratos.component.css']
})
export class EmpMisContratosComponent implements OnInit {
  
  isArtista: boolean = false;
  contratos: Contrato[] = [];
  listaVacia = undefined;
  espectaculo = Espectaculo;
  idUsuario = 0;

  constructor(
    private contratoService: ContratoService,
    private espectaculoService: EspectaculoService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cargarContratos(id);
    this.isArtista = this.tokenService.isArtista();
    this.idUsuario= this.tokenService.getIdUsuario();

  }

  cargarContratos(id:number): void {
    this.contratoService.busca(id).subscribe(
      data => {
        this.contratos = data;
        this.listaVacia = undefined;
      },
      err => {

        this.listaVacia = err.error.message;

      }
    );
  }

}
