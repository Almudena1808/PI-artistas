import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Espectaculo } from 'src/app/models/espectaculo';
import { Usuario } from 'src/app/models/usuario';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-editar-espectaculo',
  templateUrl: './editar-espectaculo.component.html',
  styleUrls: ['./editar-espectaculo.component.css']
})
export class EditarEspectaculoComponent implements OnInit {

  idUser = this.tokenService.getIdUsuario();
  previsualizacion: any;

  espectaculo: Espectaculo = new Espectaculo("","","",this.idUser,"");

  constructor(
    private espectaculoService: EspectaculoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,    
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.espectaculoService.detail(id).subscribe(
      data => {
        this.espectaculo = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['listaEsp/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.espectaculoService.update(id, this.espectaculo).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/misespectaculos/',this.idUser]);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/misespectaculos/',this.idUser]);
  }

  
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



}
