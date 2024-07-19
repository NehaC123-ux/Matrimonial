import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Idistrict } from '../Module/idistrict';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { httpOption } from '../ApplicationHttp/AllHttpHeaders';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {


  constructor(private readonly _http:HttpClient) { }
  getDistrict():Observable<Idistrict[]>{
    return this._http.get<Idistrict[]>(ApiUrlList.GetDistrictList).pipe(catchError(err=>{
      throw err;
    }));
  }
  addNewDistrict(req:Idistrict):Observable<any>{
    return this._http.post<any>(ApiUrlList.AddnewDistrict,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  
  }
  deleteDistrictData(req:Idistrict):Observable<Idistrict>{
    return this._http.delete<any>(ApiUrlList.DeleteDetailsDistrict+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  updateDistrictList(req:Idistrict):Observable<Idistrict>{
    return this._http.put<Idistrict>(ApiUrlList.UpdateDetailsDistrict,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
