import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  public imagen: any;

  listaVacia = undefined;
  isImageLoading: boolean | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
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
    console.log('usuario eliminado');
  }

 


}
