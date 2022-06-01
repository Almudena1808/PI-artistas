import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string | undefined;
  contrasenia: string | undefined;
  constructor() { }

  login() {
    
    console.log(this.user);
    console.log(this.contrasenia);
  }

  ngOnInit(): void {
  }

}
