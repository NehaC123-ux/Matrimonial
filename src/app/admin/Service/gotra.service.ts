import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Igotra } from '../Module/igotra';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { httpOption } from '../ApplicationHttp/AllHttpHeaders';

@Injectable({
  providedIn: 'root'
})
export class GotraService {
 

  constructor(private readonly _http:HttpClient) { }
  getGotraList():Observable<Igotra[]>{
    return this._http.get<Igotra[]>(ApiUrlList.GetGotraList).pipe(catchError(err=>{
      throw err;
    }))
  }
  addNewGotraData(req:Igotra):Observable<Igotra>{
    return this._http.post<Igotra>(ApiUrlList.AddNewGotra,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  deletegotraData(req:Igotra):Observable<Igotra>{
    return this._http.delete<Igotra>(ApiUrlList.DeleteGotraDetails+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  editGotraData(req:Igotra):Observable<Igotra>{
    return this._http.put<Igotra>(ApiUrlList.UpdateGotraData,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  

}
