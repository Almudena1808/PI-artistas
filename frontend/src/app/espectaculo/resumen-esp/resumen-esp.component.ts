import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Espectaculo } from 'src/app/models/espectaculo';
import { ContratoService } from 'src/app/services/contrato.service';
import { EspectaculoService } from 'src/app/services/espectaculo.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-resumen-esp',
  templateUrl: './resumen-esp.component.html',
  styleUrls: ['./resumen-esp.component.css']
})
export class ResumenEspComponent implements OnInit {

  id: number = 0;
  idUser = this.tokenService.getIdUsuario();

  isArtista: boolean = false;

  espectaculo: Espectaculo = new Espectaculo("", "", "", 0, "");

  constructor(
    private espectaculoService: EspectaculoService,
    private contratoService:ContratoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isArtista = this.tokenService.isArtista();


    const idcont = this.activatedRoute.snapshot.params['idcont'];

    this.contratoService.mirar(idcont).subscribe(
      data => {
        this.espectaculo = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/empmiscontratos/',this.idUser]);
      }
    );
  }


}
