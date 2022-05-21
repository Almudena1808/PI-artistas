import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  user = '';
  nombre = '';
  apellidos = '';
  contrasenia = '';
  telefono = '';
  email = '';
  direccion = '';
  foto = '';

  previsualizacion: any;
  archivos:any=[];

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
  ) { }


  async capturarFoto(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files!) {
      let fileList: FileList = element.files;
      const img = fileList[0];

      const base64 = this.toBase64(fileList[0]);
      this.previsualizacion = await base64;
      console.log("FileUpload -> files", img);

      this.archivos.push(base64);

    }
    else console.log('es nulisimo');

  }

  onCreate(): void {

    const usuario = new Usuario(this.user, this.nombre, this.apellidos, this.contrasenia, this.telefono, this.email, this.direccion, this.foto);
    this.usuarioService.save(usuario).subscribe(
      data => { // si todo va bien se crea el usuario
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => { // si salta un error
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
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
