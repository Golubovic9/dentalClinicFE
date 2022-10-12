import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ordinacija';

  constructor(private router: Router){}

  logout(){
    localStorage['token'] = "";
    this.router.navigate(['login'])
  }

}
