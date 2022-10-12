import { Component, OnInit } from '@angular/core';
import { DeadlineService } from '../service/deadline.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-deadline',
  templateUrl: './change-deadline.component.html',
  styleUrls: ['./change-deadline.component.css']
})
export class ChangeDeadlineComponent implements OnInit {

  public deadline: number;

  constructor(private service : DeadlineService) { }

  ngOnInit(): void {
  }

  change(){
    this.service.change(this.deadline).subscribe(res => this.alertSuccess(),
    err => this.errorAlert())
  }

  alertSuccess(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'uspesno izmenjen deadline!',
      showConfirmButton: false,
      timer: 2000
    });
  }

    errorAlert(){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'neuspesno izmenjen deadline!',
        showConfirmButton: false,
        timer: 2000
      });
    }


}
