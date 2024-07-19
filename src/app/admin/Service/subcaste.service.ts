import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Isubcaste } from '../Module/isubcaste';
import { ApiUrlList } from '../ApiAllUrl/ApiUrlList';
import { httpOption } from '../ApplicationHttp/AllHttpHeaders';

@Injectable({
  providedIn: 'root'
})
export class SubcasteService {


  constructor(private readonly _http:HttpClient) { }

  getSubCaste():Observable<Isubcaste[]>{
    return this._http.get<Isubcaste[]>(ApiUrlList.SubCasteList).pipe(catchError(err=>{
      throw err;
    }))
  }
  addNewSubcaste(req:Isubcaste):Observable<any>{
    return this._http.post(ApiUrlList.AddSubCasteDetails,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  deleteSubCasteDetails(req:Isubcaste):Observable<Isubcaste>{
     return this._http.delete<any>(ApiUrlList.DeleteSubCasteData+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  updateSubcaste(req:Isubcaste):Observable<Isubcaste>{
    return this._http.put<Isubcaste>(ApiUrlList.UpdateSubCasteData,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
