import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Iqualification } from '../Module/iqualification';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { httpOption } from '../ApplicationHttp/AllHttpHeaders';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {


  constructor(private readonly _http:HttpClient) { }
  getQualification():Observable<Iqualification[]>{
    return this._http.get<Iqualification[]>(ApiUrlList.QualificationData).pipe(catchError(err=>{
      throw err;
    }))
  }
  postQualification(req:Iqualification):Observable<Iqualification>{
    return this._http.post<Iqualification>(ApiUrlList.AddQualificationDtails,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  deleteQulificationData(req:Iqualification):Observable<Iqualification>{
    return this._http.delete<Iqualification>(ApiUrlList.DeleteQualification+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))

  }
  editQualificationData(req:Iqualification):Observable<Iqualification>{
    return this._http.put<Iqualification>(ApiUrlList.UpdateQualification,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
