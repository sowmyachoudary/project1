import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import {Patient} from './patient';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	patients:Patient[]=[];

  constructor(private hospitalservice:HospitalService) { 

  }

  ngOnInit() {
	  

	  this.getPatients();
  }
 getPatients(){
	  
	  this.hospitalservice.getPatients().
	  subscribe(
	  response=>{
		  this.patients=response;
	  console.log('Data:',this.patients)
	  },
	  err=>console.log(err),
	  ()=>console.log('complete')
	  )
  }
}
