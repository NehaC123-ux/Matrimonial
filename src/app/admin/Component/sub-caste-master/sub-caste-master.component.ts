import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SubcasteService } from '../../Service/subcaste.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Isubcaste } from '../../Module/isubcaste';

@Component({
  selector: 'app-sub-caste-master',
  templateUrl: './sub-caste-master.component.html',
  styleUrls: ['./sub-caste-master.component.css']
})
export class SubCasteMasterComponent implements OnInit {
 subcasteForm!:FormGroup;
 subCastelist!:Isubcaste;
 title:string="Add Sucaste";
 @Output() event:EventEmitter<string>=new EventEmitter<string>();
  constructor(private readonly bsmodelref:BsModalRef,private readonly _subcasteservice:SubcasteService) {
  }
  ngOnInit(): void {
   this.createSubcaste();
   this.setFormEditData();
  }
  closePop(){
    this.bsmodelref.hide();
  }
  createSubcaste(){
    this.subcasteForm=new FormGroup({
      SubcasteName:new FormControl(''),
      Status:new FormControl('')
    })
  }
  clickSubcaste(){
    if(this.subCastelist){
      this.subCastelist={
        subCasteId:this.subCastelist.subCasteId,
        subCasteName:this.subcasteForm.get('SubcasteName')?.value,
       status:this.subcasteForm.get('Status')?.value
     }
       this._subcasteservice.updateSubcaste(this.subCastelist).subscribe(res=>{
      alert(res);
      this.event.emit("data has saved successfully");
      this.closePop();
      console.log(res);
      this.closePop();
 
     })
    }
    else{
      this.subCastelist={
        subCasteName:this.subcasteForm.get('SubcasteName')?.value,
       status:this.subcasteForm.get('Status')?.value
     }
       this._subcasteservice.addNewSubcaste(this.subCastelist).subscribe(res=>{
      alert(res);
      this.event.emit("data has saved successfully");
      this.closePop();
      console.log(res);
 
     })
    }

  }
  setFormEditData(){
    if(this.subCastelist){
      this.subcasteForm.patchValue({
        SubcasteName:this.subCastelist.subCasteName,
        Status:this.subCastelist.status
      })

    }
  }
  
}
