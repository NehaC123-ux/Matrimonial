import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewRegistration } from '../Module/inew-registration';
import { Observable, catchError } from 'rxjs';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { Igotra } from '../Module/igotra';
import { Istate } from '../Module/istate';

@Injectable({
  providedIn: 'root'
})
export class NewRegistrationService {
  httpOptions={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }
  constructor(private readonly _http:HttpClient) { }

  getNewRegistrationList():Observable<INewRegistration[]>{
    return this._http.get<INewRegistration[]>(ApiUrlList.GetNewRegistration).pipe(catchError(err=>{
      throw err;
    }))
  }


addNewRegistration(req:INewRegistration):Observable<INewRegistration>{
  return this._http.post<INewRegistration>(ApiUrlList.AddNewRegistration,req,this.httpOptions).pipe(catchError(err=>{
    throw err;
  }))
}
 getDistrict(districtId:string):Observable<any>{
  return this._http.get<any>(ApiUrlList.GetDistrictId+districtId)
 }
 getGotra(subCasteId:string):Observable<any>{
  return this._http.get<Igotra[]>(ApiUrlList.GetGotraId+subCasteId)
 }
  getStateById(stateId:string):Observable<any>{
    return this._http.get<any>(ApiUrlList.getStatebyid+stateId)  
  }
  getDistrictById(districtId:string):Observable<any>{
    return this._http.get<any>(ApiUrlList.getDistrictById+districtId)
  }
}
    