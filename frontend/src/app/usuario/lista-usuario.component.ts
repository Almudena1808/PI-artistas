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
  public imagen:any;

  listaVacia = undefined;

  constructor(
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  foto:any;

  cargarFoto(foto: any){
    var blob = new Blob([foto], { type: 'image/*' });
    var url = window.URL.createObjectURL(blob);
   // window.open(url);

    console.log(url);
    this.imagen = foto;
    
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
