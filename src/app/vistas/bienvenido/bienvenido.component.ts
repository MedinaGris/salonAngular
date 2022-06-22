import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  // lista 
   cadena = "Esta es una pagina de bienvenida";
  constructor() { }

  ngOnInit(): void {
    //
  }
  //Invocar al los servicios
  //listar
}
