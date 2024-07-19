import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from '../ilogin';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ErrorHandleService } from '../error-handle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormRagister!: FormGroup;
  login!: Ilogin;
  Error: any;
  loading: boolean = false;

  errMsg: any = this._errservice. errorMsg
    ;


  constructor(private readonly _loginservice: LoginService, private readonly _router: Router
    , private readonly _errservice: ErrorHandleService) { }
  ngOnInit(): void {
    this.createLoginForm();
  }
  title = 'Mantrimoni al';
  createLoginForm() {
    this.FormRagister = new FormGroup({
      UserName: new FormControl('',Validators.required ),
      Password: new FormControl('',Validators.required)
    })
  }
  savaData() {

    this.login = {
      userName: this.FormRagister.get('UserName')?.value,
      password: this.FormRagister.get('Password')?.value
    }
    this._loginservice.logindataNew(this.login).subscribe({
      next: (data) => { 
        
        localStorage.setItem("user", JSON.stringify({ token: data, name: name }))
        this._router.navigate(['admin/Home'])
      }, error: (err => {
       //this.Error=err.error.error
       this.Error=this.errMsg[err]

      })
    });


  }
}
