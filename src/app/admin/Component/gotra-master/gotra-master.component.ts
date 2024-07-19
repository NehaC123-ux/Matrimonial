import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Isubcaste } from '../../Module/isubcaste';
import { SubcasteService } from '../../Service/subcaste.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GotraService } from '../../Service/gotra.service';
import { Igotra } from '../../Module/igotra';

@Component({
  selector: 'app-gotra-master',
  templateUrl: './gotra-master.component.html',
  styleUrls: ['./gotra-master.component.css']
})
export class GotraMasterComponent implements OnInit {
  gotralist!:Igotra;
  gotraForm!:FormGroup;
  SubCasteData:Isubcaste[]=[];
  title:string="Add Gotra";
  @Output() event:EventEmitter<string>=new EventEmitter<string>();
  constructor(private readonly subcasteservice:SubcasteService,private readonly bsmodelref:BsModalRef,
    private readonly _gotraservice:GotraService){}
  ngOnInit(): void {
   this.createGotraForm();
   this.getsubCasteData();
   this.setFormValue();
  }
  Closepop() {
    this.bsmodelref.hide();
  }

  createGotraForm(){
    this.gotraForm=new FormGroup({
      subCasteId:new FormControl(0),
      gotraName:new FormControl('',Validators.required),
      status:new FormControl('')
    })
  }
  saveState(){
    if(this.gotralist){
      this.gotralist={
        gotraId:this.gotralist.gotraId,
        subCasteId:this.gotraForm.get('subCasteId')?.value,
        gotraName:this.gotraForm.get('gotraName')?.value,
        status:this.gotraForm.get('status')?.value
      }
      this._gotraservice.editGotraData (this.gotralist).subscribe(res=>{
        alert(res);
        this.event.emit("Saved Successfully");
        this.Closepop();
        console.log(res);
  
      })
    }
    else{
      this.gotralist={
        subCasteId:this.gotraForm.get('subCasteId')?.value,
        gotraName:this.gotraForm.get('gotraName')?.value,
        status:this.gotraForm.get('status')?.value
      }
      this._gotraservice.addNewGotraData(this.gotralist).subscribe(res=>{
        alert(res);
        this.event.emit("Saved Successfully");
        this.Closepop();
        console.log(res);
  
      })
    }
  
    console.log(this.gotraForm.value)
  }
  getsubCasteData(){
    this.subcasteservice.getSubCaste().subscribe({
      next:(data)=>{
        console.log(data);
        this.SubCasteData=data;
      },
      error:(e)=>console.error(e)
      
    })
  }
  setFormValue(){
    if(this.gotralist){
      this.gotraForm.patchValue({
        subCasteId:this.gotralist.subCasteId,
        gotraName:this.gotralist.gotraName,
        status:this.gotralist.status
      })
    }
  }
}
