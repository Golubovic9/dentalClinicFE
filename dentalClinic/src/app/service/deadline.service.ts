import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  private host="http://localhost:8080/Library";

  constructor(private httpclient: HttpClient) { }

  change(hours:number):Observable<any>{
    return this.httpclient.post(this.host + "/dentist/updateDeadline",hours,{responseType: 'text' });
  }

}
