import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ilogin } from './ilogin';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  FormRagister!:FormGroup;
  login!:Ilogin
  constructor(private readonly _loginservice:LoginService){}
  ngOnInit(): void {
   this.createLoginForm();
  }
  title = 'Mantrimonial';
  createLoginForm(){
    this.FormRagister=new FormGroup({
      UserName:new FormControl(''),
      Password:new FormControl('')
    })
  }
  savaData(){
    this.login={
      userName:this.FormRagister.get('UserName')?.value,
      password:this.FormRagister.get('Password')?.value
    }
    this._loginservice.logindataNew(this.login).subscribe(res=>{
      console.log(res);
    })
  }
}
