import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SmsreviewService {  

  constructor( private httpClient: HttpClient) { }
  getPhysician(id){
    let url = 'https://fusestick.careclues.com/api/v1/public/physicians/' + id + '?expand=qualifications,specializations';
    return this.httpClient.get(url);
  }

  getPatientDetails(id, token){
    let url = 'https://fusestick.careclues.com/api/v1/patients/'+ id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get(url, httpOptions);
  }
}