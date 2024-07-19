import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {

  constructor(private readonly http:HttpClient) { }
  addMultipleImage(files:File[],newRegistrationId:any):Observable<any[]>{
  debugger;
    const formdata:FormData = new FormData()
    for(const file of files)
    {
      formdata.append('file',file)
    }
    formdata.append('id',newRegistrationId)
    console.log(formdata)
    return this.http.post<any[]>("https://localhost:7280/api/Profile/MultipleUploadImage",formdata).pipe(catchError(err=>{
      throw err;
    }))
  }

  // uploadImageService(req:any):Observable<any>{
  //   const apiUrl='https://localhost:7280/api';
  //   const imageUploadUrl='Profile/upload-profile-image';
  //   return this.http.post(`${apiUrl}${imageUploadUrl}`,req,{})
  // }
}
