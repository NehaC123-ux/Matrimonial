import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StateService } from '../../Service/state.service';
import { Istate } from '../../Module/istate';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Idistrict } from '../../Module/idistrict';
import { DistrictService } from '../../Service/district.service';

@Component({
  selector: 'app-district-master',
  templateUrl: './district-master.component.html',
  styleUrls: ['./district-master.component.css']
})
export class DistrictMasterComponent implements OnInit {
stateData:Istate[]=[];
districtForm!:FormGroup;
title:string="Add District";
district!:Idistrict;
submitted:boolean=false;
@Output() event:EventEmitter<string>=new EventEmitter<string>();
  /**
   *
   */
  constructor(private readonly bsModelRef:BsModalRef,private readonly stateservice:StateService,
    private readonly districtService:DistrictService) {

  }

  ngOnInit(): void {
   this.getStateDetails();
   this.createDistrict();
   this.setFormDistValue();
  }
  closepopup(){
    this.bsModelRef. hide();
  }
  getStateDetails(){
    this.stateservice.getState().subscribe({
      next:(data)=>{
        this.stateData=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
  }
  createDistrict(){
    this.districtForm=new FormGroup({
      Stateid:new FormControl(0),
      DistrictName:new FormControl('',Validators.required),
      status:new FormControl('')

    })
  }
  clickState()
  {
    if(this.district){
      this.district={
        districtId:this.district.districtId,
        stateId:this.districtForm.get('Stateid')?.value,
        districtName:this.districtForm.get('DistrictName')?.value,
        status:this.districtForm.get('status')?.value
      }
      this.districtService.updateDistrictList(this.district).subscribe(res=>{
        alert(res);
        this.event.emit("Saved Value Successfully");
        this.closepopup();
      })
    }
    else{
      this.district={
        stateId:this.districtForm.get('Stateid')?.value,
        districtName:this.districtForm.get('DistrictName')?.value,
        status:this.districtForm.get('status')?.value
      }
      this.districtService.addNewDistrict(this.district).subscribe(res=>{
        alert(res);
        this.event.emit("Saved Value Successfully");
        this.closepopup();
      })
    }
   
  }
  setFormDistValue(){
    if(this.district){
      this.districtForm.patchValue({
        Stateid:this.district.stateId,
        DistrictName:this.district.districtName,
        status:this.district.status
      })
    }
  }
  

}
