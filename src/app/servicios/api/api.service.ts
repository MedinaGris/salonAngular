import { Injectable } from '@angular/core';

import { LoginI } from 'src/app/modelo/login.interface';
import { ResponseI } from 'src/app/modelo/response.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string='http://localhost:8080'

  constructor(private http:HttpClient) {  }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion=this.url + "/login"
    return this.http.post<ResponseI>(direccion,form)
  }
}
