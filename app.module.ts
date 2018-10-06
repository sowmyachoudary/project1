import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { NurseComponent } from './nurse/nurse.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalService } from './hospital.service';
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

const routes:Routes=[
{
	path:'',
	redirectTo:'nurses',
	pathMatch:'full'
},
{
	path:'nurses',
	component:NurseComponent
},
{
	path:'doctors',
	component:DoctorComponent
},
{
	path:'patients',
	component:PatientComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NurseComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	RouterModule.forRoot(routes)
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
