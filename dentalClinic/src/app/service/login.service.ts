import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private host="http://localhost:8080/Library";

  constructor(private client: HttpClient) { }

  login(id:string){
    return this.client.post(this.host + '/dentist/login',id,{responseType: 'text'})
  }

}
