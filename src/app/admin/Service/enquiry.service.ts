import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Ienquiry } from '../Module/ienquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  httpOptions={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }
  constructor(private readonly _http:HttpClient) { }
  getEnquiryList():Observable<Ienquiry[]>{
    return this._http.get<Ienquiry[]>("https://localhost:7280/api/Enquiry/GetEnquiryData").pipe(catchError(err=>{
      throw err;
    }))
  }
  addNewEnquiryData(req:Ienquiry):Observable<Ienquiry>
{
  return this._http.post<Ienquiry>("https://localhost:7280/api/Enquiry/PostEnquiryData",req,this.httpOptions).pipe(catchError(err=>{
    throw err;
  }))
} 
deleteEnquiry(req:Ienquiry):Observable<Ienquiry>{
  return this._http.delete<Ienquiry>("https://localhost:7280/api/Enquiry/DeleteEnquiry?enquiryId="+req,this.httpOptions).pipe(catchError(err=>{
    throw err;
  }))
} 
 postEnquiryData (req:Ienquiry):Observable<Ienquiry>{
  return this._http.put<Ienquiry>("https://localhost:7280/api/Enquiry/EditeEnquiryData ",req,this.httpOptions).pipe(catchError(err=>{
    throw err;
  }))
 }

}
