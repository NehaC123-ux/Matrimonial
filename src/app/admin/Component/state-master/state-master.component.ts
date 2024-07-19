import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Icountry } from '../../Module/icountry';
import { CountryService } from '../../Service/country.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istate } from '../../Module/istate';
import { StateService } from '../../Service/state.service';

@Component({
  selector: 'app-state-master',
  templateUrl: './state-master.component.html',
  styleUrls: ['./state-master.component.css']
})
export class StateMasterComponent implements OnInit {
countrydata:Icountry[]=[];
stateForm!:FormGroup;
title:string="Add State";
states!:Istate;
@Output() event:EventEmitter<string>=new EventEmitter<string>();
constructor(private readonly bsModelref:BsModalRef, private readonly countryservice:CountryService,
  private readonly stateservice:StateService ) {
  
  
}
ngOnInit(): void {
  console.log("selected state",this.states)
  this.getCountryList();
  this.createStateForm();
  this.setFormValues(); 
}
  Closepop(){
    this.bsModelref.hide();
  }
  getCountryList(){
    this.countryservice.getCountry().subscribe({
      next:(data)=>{
        this.countrydata=data;
        console.log(data);

      },
      error:(e)=>console.error(e)
    });
  }
  createStateForm(){
    this.stateForm=new FormGroup({
      countryId:new FormControl(''),
      stateName:new FormControl('',Validators.required),
      status:new FormControl(''),
      


    })
  }
  get stateNameFormForm(){
    return this.stateForm.get('stateName')
  }; 
  saveState(){
    //console.log("create object for save",this.states)
    if(this.states){
      this.states={
        stateId:this.states.stateId,
        countryId:this.stateForm.get("countryId")?.value,
        stateName:this.stateForm.get("stateName")?.value,
        status:this.stateForm.get("status")?.value,
      
      }
      this.stateservice.updataStateDetails(this.states).subscribe(res=>{
        alert(res);
        this.event.emit("Saved Successfully");
        this.Closepop();
        console.log(this.stateForm.value)
        
        
      })
    }
    else{
      this.states={
        countryId:this.stateForm.get("countryId")?.value,
        stateName:this.stateForm.get("stateName")?.value,
        status:this.stateForm.get("status")?.value,
      
      }
      this.stateservice.addNewState(this.states).subscribe(res=>{
        alert(res);
        this.event.emit("Saved Successfully"); 
        this.Closepop();
        console.log(res);
        
        
      })
    }
  }
  setFormValues(){
    if(this.states){
      this.title=this.title+"**"+this.states.stateName
      this.stateForm.patchValue({
      
        countryId:this.states.countryId,
        stateName:this.states.stateName,
        status:this.states.status,
      })
    }
  }

 

}
