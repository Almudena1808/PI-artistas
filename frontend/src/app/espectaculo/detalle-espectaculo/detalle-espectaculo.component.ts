import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Espectaculo } from 'src/app/models/espectaculo';
import { Usuario } from 'src/app/models/usuario';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-detalle-espectaculo',
  templateUrl: './detalle-espectaculo.component.html',
  styleUrls: ['./detalle-espectaculo.component.css']
})
export class DetalleEspectaculoComponent implements OnInit {
id: number=0;
  idUser = this.tokenService.getIdUsuario();

  isArtista: boolean = false;

  espectaculo: Espectaculo = new Espectaculo("","","",this.idUser,"");

  constructor(
    private espectaculoService: EspectaculoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isArtista = this.tokenService.isArtista();


    const id = this.activatedRoute.snapshot.params['id'];
    this.espectaculoService.detail(id).subscribe(
      data => {
        this.espectaculo = data;
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
    this.router.navigate(['listaEsp/']);
  }

  contratar(id:number){
    this.router.navigate(['/id']);
  }

}
