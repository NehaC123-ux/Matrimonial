import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

 // constructor(private readonly error:HttpErrorResponse) { }
  handleErrror(err:HttpErrorResponse){
    if(err!==err){
      return throwError('UnKnown');
    }
    else{
      return throwError(err.error.error);
    }
  }

  errorMsg={
    
            EMAIL_NOT_FOUND: 'There is no user record corresponding to this identifier. The user may have been deleted',
            INVALID_PASSWORD: 'The password is invalid or the user does not have a password',
            Unknown: 'The user account is not found'
  }
}
