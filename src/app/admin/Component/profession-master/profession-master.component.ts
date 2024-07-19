import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Iprofession } from '../../Module/iprofession';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfessionService } from '../../Service/profession.service';

@Component({
  selector: 'app-profession-master',
  templateUrl: './profession-master.component.html',
  styleUrls: ['./profession-master.component.css']
})
export class ProfessionMasterComponent implements OnInit {
  professionDataForm!:FormGroup;
  profession!:Iprofession;
  title:string="Add Profession";
  @Output() event:EventEmitter<string>=new EventEmitter<string>();
  /**
   *
   */
  constructor(private readonly bsmodelref:BsModalRef,private readonly _professionservie:ProfessionService) {
  }
  closePopup(){
    this.bsmodelref.hide();
  }
  ngOnInit(): void {
   this.createProfessionForm();
   this.setFormProfessionValue();
  }
  createProfessionForm(){
    this.professionDataForm=new FormGroup({
      professionName:new FormControl('',Validators.required),
      status:new FormControl('')
    })
  }
  postClickData(){
    if(this.profession){
      this.profession={
        professionId:this.profession.professionId,
        professionName:this.professionDataForm.get('professionName')?.value,
        status:this.professionDataForm.get('status')?.value
      }
      this._professionservie.updateProfession(this.profession).subscribe(res=>{
        alert(res);
        console.log(res);
        this.closePopup();
        this.event.emit("Saved Succussefully");
      })
    }
    else{
      this.profession={
        professionName:this.professionDataForm.get('professionName')?.value,
        status:this.professionDataForm.get('status')?.value
      }
      this._professionservie.addNewProfession(this.profession).subscribe(res=>{
        alert(res);
        console.log(res);
        this.closePopup();
        this.event.emit("Saved Succussefully");
      })
    }
  
  }

  
  setFormProfessionValue(){
    if(this.profession){
      this.professionDataForm.patchValue({
        professionName:this.profession.professionName,
        status:this.profession.status
      })
    }
  }

}
