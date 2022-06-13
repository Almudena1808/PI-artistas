import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Espectaculo } from 'src/app/models/espectaculo';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-espectaculos',
  templateUrl: './mis-espectaculos.component.html',
  styleUrls: ['./mis-espectaculos.component.css']
})
export class MisEspectaculosComponent implements OnInit {

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
  
  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.espectaculoService.delete(id).subscribe(res => this.cargarEspectaculos(id));
        Swal.fire(
          'OK',
          'Espectáculo eliminado',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Espectáculo a salvo',
          'error'
        );
      }
    });
  }

}
