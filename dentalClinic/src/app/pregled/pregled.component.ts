import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Apointment } from '../model/apointment';
import { Examination } from '../model/examination';
import { ApointmentService } from '../service/apointment.service';

@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.css']
})
export class PregledComponent implements OnInit {

  @Input() public pregled: Examination;
  @Output() private brisanje : EventEmitter<number> = new EventEmitter();

  constructor(private servis: ApointmentService) { }

  ngOnInit(): void {
  }

  delete(id:number){
      this.brisanje.emit(id)
  }

  // delete(id:number){
  //   this.servis.delete(id).subscribe(res => this.alertSuccess(), err => this.errorAlert())
  // }

  alertSuccess(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'uspesno otkazivanje pregleda!',
      showConfirmButton: false,
      timer: 2000
    });
  }

    errorAlert(){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'nije uspelo otkazivanje pregleda!',
        showConfirmButton: false,
        timer: 2000
      });
    }

}
