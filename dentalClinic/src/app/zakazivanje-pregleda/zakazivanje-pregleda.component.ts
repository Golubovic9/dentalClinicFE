import { Component, OnInit } from '@angular/core';
import { Apointment } from '../model/apointment';
import { ApointmentService } from '../service/apointment.service';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import Swal from 'sweetalert2';
import { Examination } from '../model/examination';

@Component({
  selector: 'app-zakazivanje-pregleda',
  templateUrl: './zakazivanje-pregleda.component.html',
  styleUrls: ['./zakazivanje-pregleda.component.css']
})
export class ZakazivanjePregledaComponent implements OnInit {

  public email: string;
  public phone:string;
  public pocetak: string;
  public trajanje: number;
  public date: Date;
  public apointments: Examination[] ;

  public response:string ="";
  public message :string="";

  constructor(private servis : ApointmentService) { }

  ngOnInit(): void {
  }

  getSchedule(){
    this.servis.getSchedule(this.date).subscribe( res => {this.apointments = res;
      if(this.apointments.length<1)
          this.alertFree();
    }, eror => this.alertMistake());
  }

  // setApointment(){
  //   this.servis.setApointment(this.phone,this.email,this.trajanje,this.pocetak,this.date).subscribe(res => this.alertSuccess(),
  //   err=> this.errorAlert())
  // }

  setApointment(form:any){
    if (form.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    }else{
      const apointment: Apointment = form.value.apointment ;
      apointment.apointmentDate = this.date;
      this.servis.setApointment(apointment).subscribe(res => {
        this.response = res;
        if(this.response === "something went wrong")
          this.alertMistake2();
        else
          this.alertSuccess()},
      err=> this.errorAlert())
    }
  }


  alertFree(){
    Swal.fire({
      position: 'top',
      title: 'svi termini su slobodni!',
      showConfirmButton: false,
      timer: 2000
    });
  }

  alertMistake(){
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'doslo je do greske prilikom ucitavanja pregleda!',
      showConfirmButton: false,
      timer: 2000
    });
  }

  alertMistake2(){
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'proverite da li ste ispravno uneli sva polja i termin!',
      showConfirmButton: false,
      timer: 2000
    });
  }

  alertSuccess(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'uspesno zakazivanje pregleda!',
      showConfirmButton: false,
      timer: 2000
    });
  }

    errorAlert(){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'nije uspelo zakazivanje pregleda!',
        showConfirmButton: false,
        timer: 2000
      });
    }

}
