import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelo/login.interface';
import { ResponseI } from 'src/app/modelo/response.interface';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required,),
    contrasena: new FormControl('',Validators.required)
  })
  constructor(private api:ApiService, private router:Router) {

   }

  ngOnInit(): void {
  }

  onLogin(form:any){
    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if(dataResponse.status=="ok"){
        localStorage.setItem("token",dataResponse.response);
        this.router.navigate(['bienvenido'])
      }

    })
  }
}
  