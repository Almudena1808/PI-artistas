import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-elegir-resgistro',
  templateUrl: './usuario-elegir-resgistro.component.html',
  styleUrls: ['./usuario-elegir-resgistro.component.css']
})
export class UsuarioElegirResgistroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  artista():void{
    
    this.router.navigate(['/registroArtista']);

  }

  empresario():void{
    this.router.navigate(['/registro']);
  }


}
