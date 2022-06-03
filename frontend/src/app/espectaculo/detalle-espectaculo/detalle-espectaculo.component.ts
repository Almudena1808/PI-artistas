import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Espectaculo } from 'src/app/models/espectaculo';
import { EspectaculoService } from 'src/app/services/espectaculo.service';

@Component({
  selector: 'app-detalle-espectaculo',
  templateUrl: './detalle-espectaculo.component.html',
  styleUrls: ['./detalle-espectaculo.component.css']
})
export class DetalleEspectaculoComponent implements OnInit {
  espectaculo: Espectaculo = new Espectaculo("","",0);

  constructor(
    private espectaculoService: EspectaculoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listEsp']);
  }
}
