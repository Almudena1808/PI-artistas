import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario("","","","","","","","","","","","");

  constructor( 
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.detail(id).subscribe(
      data => {
        this.usuario = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['listaUsuario/']);
      }
    );
  }

  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.update(id, this.usuario).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['listaUsuario/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['listaUsuario/']);
  }

}
