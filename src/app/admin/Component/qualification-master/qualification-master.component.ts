import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Iqualification } from '../../Module/iqualification';
import { QualificationService } from '../../Service/qualification.service';

@Component({
  selector: 'app-qualification-master',
  templateUrl: './qualification-master.component.html',
  styleUrls: ['./qualification-master.component.css']
})
export class QualificationMasterComponent implements OnInit {
  qualificationForm!:FormGroup;
  qualificatData!:Iqualification;
  title:string="Add Qualification";
  @Output() event:EventEmitter<string>=new EventEmitter<string>();
  constructor(private readonly bsmodalref:BsModalRef,private readonly qualificatservice:QualificationService){}
  ngOnInit(): void {
    this.createQualification();
    this.setFormValueQulification();
  }
closePop() {
this.bsmodalref.hide();
}
createQualification(){
  this.qualificationForm=new FormGroup({
    QualificationNames:new FormControl('',Validators.required),
    status:new FormControl('')
 
  })
}
postClickData(){
  if(this.qualificatData){
    this.qualificatData={
      qualificationId:this.qualificatData.qualificationId,
      qualificationName:this.qualificationForm.get('QualificationNames')?.value,
      status:this.qualificationForm.get("status")?.value
    
    }
    this.qualificatservice.editQualificationData(this.qualificatData).subscribe(res=>{
      alert(res);
      this.event.emit("Saved Details Succussfully");
      this.closePop();
      console.log(res);
    })
  }
  else{
    this.qualificatData={
      qualificationName:this.qualificationForm.get('QualificationNames')?.value,
      status:this.qualificationForm.get("status")?.value
    
    }
    this.qualificatservice.postQualification(this.qualificatData).subscribe(res=>{
      alert(res);
      this.event.emit("Saved Details Succussfully");
      this.closePop();
      console.log(res);
    })
  }

console.log(this.qualificationForm.value)
}
setFormValueQulification(){
  if(this.qualificatData){
    this.qualificationForm.patchValue({
      QualificationNames:this.qualificatData.qualificationName,
      status:this.qualificatData.status
    })
  }
}


}
