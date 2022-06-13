import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Espectaculo } from 'src/app/models/espectaculo';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-esp-art',
  templateUrl: './lista-esp-art.component.html',
  styleUrls: ['./lista-esp-art.component.css']
})
export class ListaEspArtComponent implements OnInit {
  id: number=0;

  espectaculos: Espectaculo[] = [];
  listaVacia = undefined;
  isImageLoading: boolean | undefined;
  isArtista: boolean = false;
  

  constructor(
    private espectaculoService: EspectaculoService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,


  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cargarEspectaculos(id);
    this.isArtista = this.tokenService.isArtista();

  }

  cargarEspectaculos(id:number): void {
    this.espectaculoService.busca(id).subscribe(
      data => {
        this.espectaculos = data;
        this.listaVacia = undefined;
      },
      err => {

        this.listaVacia = err.error.message;

      }
    );
  }


}
