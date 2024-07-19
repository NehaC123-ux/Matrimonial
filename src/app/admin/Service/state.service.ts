import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe } from 'rxjs';
import { Istate } from '../Module/istate';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { httpOption } from '../ApplicationHttp/AllHttpHeaders';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private readonly _http:HttpClient) { }

  getState():Observable<Istate[]>{
    return this._http.get<Istate[]>(ApiUrlList.GetStateList).pipe(catchError(err=>{
      throw err;
    }));
  }
  addNewState(req:Istate):Observable<any>{
    return this._http.post<any>(ApiUrlList.AddDataState,req,httpOption).pipe(catchError(err=>{
      throw err;
    }));

  }
  deleteStateDetails(req:Istate):Observable<Istate>{
    return this._http.delete<Istate>(ApiUrlList.daleteStateDetails+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  updataStateDetails(req:Istate):Observable<Istate>{
    return this._http.put<Istate>(ApiUrlList.updateDatastate,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
