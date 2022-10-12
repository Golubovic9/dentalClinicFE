import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Examination } from '../model/examination';
import { ApointmentService } from '../service/apointment.service';

@Component({
  selector: 'app-otkazivanje',
  templateUrl: './otkazivanje.component.html',
  styleUrls: ['./otkazivanje.component.css']
})
export class OtkazivanjeComponent implements OnInit {

  public phone: string;
  public apointments : Examination[];

  constructor(private servis: ApointmentService) { }

  ngOnInit(): void {
  }

  getSchedule(){
    this.servis.getApointments(this.phone).subscribe(res => 
      this.apointments = res
    , err => this.errorAlert2() )
  }

  delete(id:number){
    this.servis.delete(id).subscribe( res => this.alertSuccess(),err => this.errorAlert())
  }

  alertSuccess(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'uspesno otkazan termin!',
      showConfirmButton: false,
      timer: 2000
    });
  }

    errorAlert(){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'neuspesno otkazan termin!',
        showConfirmButton: false,
        timer: 2000
      });
    }

    errorAlert2(){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'nema zakazanih termina sa ovim brojem',
        showConfirmButton: false,
        timer: 2000
      });
    }

}
