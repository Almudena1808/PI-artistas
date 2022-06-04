import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-artista',
  templateUrl: './registro-artista.component.html',
  styleUrls: ['./registro-artista.component.css']
})
export class RegistroArtistaComponent implements OnInit {

  user = '';
  nombre = '';
  apellidos = '';
  contrasenia = '';
  telefono = '';
  email = '';
  direccion = '';
  foto = '';
  fechNac= '';
  especializacion= '';
  descripcion= '';
  organizacion= '';

  

  usuario = new Usuario(this.user, this.nombre, this.apellidos, this.contrasenia, this.telefono, this.email, this.direccion, this.foto, this.fechNac, this.especializacion,this.descripcion,this.organizacion);


  previsualizacion: any;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
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
  onCreate(): void {
    this.usuario.user =this.user;
    this.usuario.nombre =this.nombre;
    this.usuario.apellidos =this.apellidos;
    this.usuario.contrasenia =this.contrasenia;
    this.usuario.telefono =this.telefono;
    this.usuario.email =this.email;
    this.usuario.direccion =this.direccion;
    this.usuario.foto =this.previsualizacion;
    this.usuario.fechNac =this.fechNac;
    this.usuario.especializacion =this.especializacion;
    this.usuario.descripcion =this.descripcion;
    this.usuario.organizacion =this.organizacion;



    this.authService.registro(this.usuario).subscribe(
      data => { // si todo va bien se crea el usuario
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['listaUsuario/']);
      },
      err => { // si salta un error
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/eligeRol']);
  }




  toBase64 = (file: Blob) => new Promise((resolve: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result)
    };

  });

  ngOnInit(): void {
  }

}
