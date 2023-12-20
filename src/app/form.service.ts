import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

const base_url = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http:HttpClient
  ) { }

  crearUsuario(data: FormService):Observable<any>{
    console.log(data);
    return this.http.post(`${base_url}/form`, data);
  }
}
