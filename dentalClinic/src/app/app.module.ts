import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZakazivanjePregledaComponent } from './zakazivanje-pregleda/zakazivanje-pregleda.component';
import { ChangeDeadlineComponent } from './change-deadline/change-deadline.component';
import { WeekScheduleComponent } from './week-schedule/week-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { LoginComponent } from './login/login.component';
import { PregledComponent } from './pregled/pregled.component';
import { ApointmentService } from './service/apointment.service';
import { DeadlineService } from './service/deadline.service';
import { LoginService } from './service/login.service';
import { Auth } from './guard/auth';
import {MatCardModule} from '@angular/material/card';
import { OtkazivanjeComponent } from './otkazivanje/otkazivanje.component';

@NgModule({
  declarations: [
    AppComponent,
    ZakazivanjePregledaComponent,
    ChangeDeadlineComponent,
    WeekScheduleComponent,
    LoginComponent,
    PregledComponent,
    OtkazivanjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    MatCardModule
  ],
  providers: [ApointmentService,DeadlineService,LoginService, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
