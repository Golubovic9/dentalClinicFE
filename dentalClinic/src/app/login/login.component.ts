import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private response :string="";
  public password: string;
  private role: string = "dentist";

  constructor(private servis : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.servis.login(this.password).subscribe( res => {
      this.response = res;
      if(this.response === "fail"){
        this.alertSuccess();
        localStorage.setItem("token", this.role);
        this.router.navigate(['/zakazivanje']);}
      else{
          this.alertError()
      }
    }, err => this.alertError()
    )
  }

  alertSuccess(){
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'uspesna prijava!',
      showConfirmButton: false,
      timer: 2000
    });
  }

  alertError(){
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'ne postoji korisnik sa ovim id!',
      showConfirmButton: false,
      timer: 2000
    });
  }

}
