import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpc:HttpClient) { }
  getNurses():Observable<any>{
	  console.log('comes to getNurses() in service')
	  return this.httpc.get('http://localhost:3000/api/getnurses');
  }
  getPatients():Observable<any>{
	  console.log('comes to getPatients() in service')
	  return this.httpc.get('http://localhost:3000/api/getpatients');
  }
  getDoctors():Observable<any>{
	  console.log('comes to getDoctors() in service')
	  return this.httpc.get('http://localhost:3000/api/getdoctors');
  }
}
