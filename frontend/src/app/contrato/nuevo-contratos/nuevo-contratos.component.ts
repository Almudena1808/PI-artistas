import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contrato } from 'src/app/models/contrato';
import { Espectaculo } from 'src/app/models/espectaculo';
import { ContratoService } from 'src/app/services/contrato.service';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nuevo-contratos',
  templateUrl: './nuevo-contratos.component.html',
  styleUrls: ['./nuevo-contratos.component.css']
})
export class NuevoContratosComponent implements OnInit {


  user = this.tokenService.getIdUsuario();
  aceptado = false;
  fechaEvento= '';
  date = new Date();
  fechaSolicitud = this.date.toLocaleDateString(); // cojo la fecha y la pongo mm/dd/aaaa
  fechaFirma= '';
  espectaculo= 0;
  mensaje= '';

  contrato = new Contrato(this.aceptado, this.fechaEvento, this.fechaSolicitud, this.fechaFirma,this.espectaculo, this.user, this.mensaje);

  espec: Espectaculo = new Espectaculo("","","",0,"");


  constructor(
    private contratoService: ContratoService,
    private espectaculoService: EspectaculoService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.espectaculoService.detail(id).subscribe(
      data => {
        this.espec = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/empmiscontratos/',this.user]);
      }
    );
  }


  

  onCreate(): void {

    const espId = this.activatedRoute.snapshot.params['id'];


    this.contrato.aceptado = this.aceptado;
    this.contrato.fechaEvento = this.fechaEvento;
    this.contrato.fechaSolicitud = this.fechaSolicitud;
//    console.log('id usuario' + this.user);
    this.contrato.fechaFirma = this.fechaFirma;
    this.contrato.espectaculo =espId;
    this.contrato.empresario =this.user;
    this.contrato.mensaje = this.mensaje;





    this.contratoService.save(this.contrato).subscribe(
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
    this.router.navigate(['/empmiscontratos/',this.user]);
  }

}


