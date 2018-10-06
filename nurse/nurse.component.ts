import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import {Nurse} from './nurse';

@Component({
  selector: 'nurse-list',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {
	
	nurses:Nurse[]=[];

  constructor(private hospitalservice:HospitalService) { 
  
  }

  ngOnInit() {
	  this.getNurses();
  }
  getNurses(){
	  this.hospitalservice.getNurses().
	  subscribe(
	  response=>{
		  this.nurses=response;
	  console.log('Data:',this.nurses)
	  },
	  err=>console.log(err),
	  ()=>console.log('complete')
	  )
  }
}
