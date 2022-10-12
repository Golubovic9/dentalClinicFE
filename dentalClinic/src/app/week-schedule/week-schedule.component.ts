import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Apointment } from '../model/apointment';
import { Examination } from '../model/examination';
import { ApointmentService } from '../service/apointment.service';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.css']
})
export class WeekScheduleComponent implements OnInit {

  public apointments$ : Observable<Examination[]>;

  constructor(private service: ApointmentService) { }

  ngOnInit(): void {
    this.apointments$ = this.service.getWeekSchedule();
  }

  delete(phone:number){
      this.service.delete(phone).subscribe( res => this.alertSuccess(), err => this.errorAlert() )
  }


  alertSuccess(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'uspesno otkazano!',
      showConfirmButton: false,
      timer: 2000
    });
  }

    errorAlert(){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'neuspesno otkazano!',
        showConfirmButton: false,
        timer: 2000
      });
    }

}
