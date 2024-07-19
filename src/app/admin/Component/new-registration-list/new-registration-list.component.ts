import { Component, OnInit } from '@angular/core';
import { INewRegistration } from '../../Module/inew-registration';
import { NewRegistrationService } from '../../Service/new-registration.service';

@Component({
  selector: 'app-new-registration-list',
  templateUrl: './new-registration-list.component.html',
  styleUrls: ['./new-registration-list.component.css']
})
export class NewRegistrationListComponent implements OnInit {
  newRegistrationList:any[]=[];
  filepath:string='https://localhost:7280/Assets/Image/'
  /**
   *
   */
  constructor(private readonly newlistservice:NewRegistrationService) {
    
    
  }
  ngOnInit(): void {
    this.getnewRegistrationAll();
  }
  getnewRegistrationAll(){
    this.newlistservice.getNewRegistrationList().subscribe({
      next:(data)=>{
        this.newRegistrationList=data
        console.log(data)
      },error:(e)=>console.error(e)
    })
  }

}
