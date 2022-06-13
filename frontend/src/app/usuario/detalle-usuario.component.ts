import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { TokenService } from '../services/token.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  idUser = this.tokenService.getIdUsuario();
  isArtista: boolean = false;


  usuario: Usuario = new Usuario("","","","","","","","","","","","");

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isArtista = this.tokenService.isArtista();

    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.detail(id).subscribe(
      data => {
        this.usuario = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }
  volver(): void {
    this.router.navigate(['listaUsuario']);
  }
}
