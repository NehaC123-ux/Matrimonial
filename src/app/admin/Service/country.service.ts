import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icountry } from '../Module/icountry';
import { Observable, catchError } from 'rxjs';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { httpOption } from '../ApplicationHttp/AllHttpHeaders';
import { INewRegistration } from '../Module/inew-registration';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 

  constructor(private readonly _http:HttpClient) { }
  getCountry():Observable<Icountry[]>{
    return this._http.get<Icountry[]>(ApiUrlList.GetCountryList);
  }

  addNewCountry(req:Icountry):Observable<Icountry>{
    return this._http.post<Icountry>(ApiUrlList.addDataCountry,req,httpOption)
  }
  deleteCountrydata(req:Icountry):Observable<any>{
    return this._http.delete<Icountry>(ApiUrlList.DeleteCountry+req,httpOption)
  }
  updateCountryList(req:Icountry):Observable<Icountry>{
    return this._http.put<Icountry>(ApiUrlList.updateDatacountry,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  GetCountryDataById(countryId:any):Observable<any>{
    return this._http.get<any>(ApiUrlList.GetDetailsById+countryId).pipe(catchError(err=>{
      throw err;
    }))
  }
}
