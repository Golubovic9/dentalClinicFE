import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apointment } from '../model/apointment';
import { Examination } from '../model/examination';

@Injectable({
  providedIn: 'root'
})
export class ApointmentService {

  

  private host="http://localhost:8080/Library"

  constructor(private client : HttpClient ) { }

  getSchedule(date:Date):Observable<any>{
    return this.client.post(this.host + '/patient/getApointments',date);
  }

  getWeekSchedule():Observable<Examination[]>{
      return this.client.get<Examination[]>(this.host + "/dentist/getWeekSchedule");
  }

  getApointments(id:string):Observable<any>{
    return this.client.post(this.host + "/patient/getReservedApointments",id);
  }

  // setApointment(phone:string,email:string,duration:number,pocetak:string ,datum:Date):Observable<any>{
  //   return this.client.post(this.host + "/patient/setApointment",
  //   {apointmentDate:datum,
  //    start:pocetak,
  //    duration:duration,
  //    id:phone, 
  //    email:email, }
  //    ,{responseType: 'text' });
  // }

  setApointment(a: Apointment):Observable<any>{
    return this.client.post(this.host + "/patient/setApointment", a,{responseType: 'text' });
  }

  delete(id:number){
    return this.client.delete(this.host + "/patient/cancelApointment/" + id,{responseType:'text'})
  }

}
