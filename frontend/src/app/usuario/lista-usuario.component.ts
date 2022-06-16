import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  
  isArtista: boolean = false;

  usuarios: Usuario[] = [];
  public imagen: any;

  listaVacia = undefined;
  idUsuario = 0;


  constructor(
    private tokenService: TokenService,

    private usuarioService: UsuarioService,
    private http: HttpClient,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.isArtista = this.tokenService.isArtista();
    this.idUsuario= this.tokenService.getIdUsuario();

    if(this.isArtista){
      this.router.navigate(['/perfil/',this.idUsuario]);

    }
    this.cargarUsuarios();
  }


  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuarios = data;
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
        this.usuarioService.delete(id).subscribe(res => this.cargarUsuarios());
        Swal.fire(
          'OK',
          'Usuario eliminado',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Usuario a salvo',
          'error'
        );
      }
    });  
  }

}
