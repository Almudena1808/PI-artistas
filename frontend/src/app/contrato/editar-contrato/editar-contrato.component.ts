import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contrato } from 'src/app/models/contrato';
import { ContratoService } from 'src/app/services/contrato.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-editar-contrato',
  templateUrl: './editar-contrato.component.html',
  styleUrls: ['./editar-contrato.component.css']
})
export class EditarContratoComponent implements OnInit {
  date = new Date();
  fechaFirma = this.date.toLocaleDateString(); // cojo la fecha y la pongo mm/dd/aaaa
  idUser = this.tokenService.getIdUsuario();
  previsualizacion: any;
 
  
  contrato: Contrato = new Contrato(false,"","","",0,0,"");

  constructor(
    private contratoService: ContratoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,    
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.contratoService.detail(id).subscribe(
      data => {
        this.contrato = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['misespectaculo/',this.idUser]);
      }
    );
  }

  
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.contrato);
    this.contrato.fechaFirma = this.fechaFirma;
    this.contratoService.update(id, this.contrato).subscribe(
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

}
