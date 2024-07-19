import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from './ilogin';
import { Observable, catchError } from 'rxjs';
import { ErrorHandleService } from './error-handle.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOption={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }

  loginApi:string="https://localhost:7280/api/Authorization/UserList";
  constructor(private readonly _http:HttpClient,private readonly _errService:ErrorHandleService) { }
  logindataNew(req:Ilogin):Observable<Ilogin>{
   
    return this._http.post<Ilogin>(this.loginApi,req,this.httpOption).pipe(catchError(err=>{
     return this._errService.handleErrror(err)
    //throw err
    }))
  }
} 
