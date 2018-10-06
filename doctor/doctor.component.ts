import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import {Doctor} from './doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
	
	doctors:Doctor[]=[];

  constructor(private hospitalservice:HospitalService) {

  }

  ngOnInit() {
	  
	  this.getDoctors();
  }
  getDoctors(){
	  this.hospitalservice.getDoctors().
	  subscribe(
	  response=>{
		  this.doctors=response;
	  console.log('Data:',this.doctors)
	  },
	  err=>console.log(err),
	  ()=>console.log('complete')
	  )
  }
}
