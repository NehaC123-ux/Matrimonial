import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Iprofession } from '../Module/iprofession';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { httpOption } from '../ApplicationHttp/AllHttpHeaders';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private readonly _http:HttpClient) { }
  getProfessionData():Observable<Iprofession[]>{
    return this._http.get<Iprofession[]>(ApiUrlList.GetProfessionData).pipe(catchError(err=>{
      throw err;
    }))
  }
  addNewProfession(req:Iprofession):Observable<Iprofession>{
    return this._http.post<Iprofession>(ApiUrlList.AddNewProfessionList,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  deleteProfessionData(req:Iprofession):Observable<Iprofession>{
    return this._http.delete<Iprofession>(ApiUrlList.DeleteProfessionData+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  updateProfession(req:Iprofession):Observable<Iprofession>{
    return this._http.put<Iprofession>(ApiUrlList.UpdateProfession,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
