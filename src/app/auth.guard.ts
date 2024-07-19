import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger
  var token=localStorage.getItem('user')
  return token?true:false

};
