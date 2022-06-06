import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Espectaculo } from 'src/app/models/espectaculo';
import { Usuario } from 'src/app/models/usuario';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nuevo-espectaculo',
  templateUrl: './nuevo-espectaculo.component.html',
  styleUrls: ['./nuevo-espectaculo.component.css']
})
export class NuevoEspectaculoComponent implements OnInit {
  nombre = '';
  descripcion = '';
  precio = '';
  user = this.tokenService.getIdUsuario();
  usuario = this.usuarioService.detail(this.user);

  foto = '';

  espectaculo = new Espectaculo(this.nombre, this.descripcion, this.precio, this.user);


  constructor(
    private espectaculoService: EspectaculoService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  
  onCreate(): void {
    this.espectaculo.descripcion =this.descripcion;
    this.espectaculo.nombre =this.nombre;
    this.espectaculo.precio =this.precio;
    console.log('id usuario'+this.user);

   // this.espectaculo.usuario= this.user;
    


    this.espectaculoService.save(this.espectaculo).subscribe(
      data => { // si todo va bien se crea el usuario
        console.log('datos: '+ data);
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => { // si salta un error
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaEsp']);
  }

  ngOnInit(): void {
  }

}
