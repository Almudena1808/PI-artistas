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

  previsualizacion: any;

  imagen = '';

  espectaculo = new Espectaculo(this.nombre, this.descripcion, this.precio, this.user,this.imagen);


  constructor(
    private espectaculoService: EspectaculoService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }


  async capturarFoto(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files!) {
      let fileList: FileList = element.files;
      const img = fileList[0];

      const base64 = this.toBase64(img);
      this.previsualizacion = await base64;
      console.log('PREVISUALIZACION ' + this.previsualizacion);
      console.log("FileUpload -> files", img);
    }
    else console.log('es nulisimo');

  }

  toBase64 = (file: Blob) => new Promise((resolve: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result)
    };

  });



  onCreate(): void {
    this.espectaculo.descripcion = this.descripcion;
    this.espectaculo.nombre = this.nombre;
    this.espectaculo.precio = this.precio;
    console.log('id usuario' + this.user);
    this.espectaculo.usuario = this.user;
    this.espectaculo.imagen =this.previsualizacion;




    this.espectaculoService.save(this.espectaculo).subscribe(
      data => { // si todo va bien se crea el espectaculo
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
