import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDeadlineComponent } from './change-deadline/change-deadline.component';
import { Auth } from './guard/auth';
import { LoginComponent } from './login/login.component';
import { OtkazivanjeComponent } from './otkazivanje/otkazivanje.component';
import { WeekScheduleComponent } from './week-schedule/week-schedule.component';
import { ZakazivanjePregledaComponent } from './zakazivanje-pregleda/zakazivanje-pregleda.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "zakazivanje", component: ZakazivanjePregledaComponent},
  {path : "changeDeadline", component: ChangeDeadlineComponent, canActivate: [Auth]},
  {path : "weekSchedule", component : WeekScheduleComponent,canActivate: [Auth]},
  {path: "otkazivanje", component: OtkazivanjeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
