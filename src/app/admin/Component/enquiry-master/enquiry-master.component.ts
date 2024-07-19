import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Ienquiry } from '../../Module/ienquiry';
import { EnquiryService } from '../../Service/enquiry.service';

@Component({
  selector: 'app-enquiry-master',
  templateUrl: './enquiry-master.component.html',
  styleUrls: ['./enquiry-master.component.css']
})
export class EnquiryMasterComponent implements OnInit {
  enquiryForm!:FormGroup;
  enquiryListData!:Ienquiry;

  @Output() event:EventEmitter<string>=new EventEmitter<string>();
  constructor(private readonly bsModelref:BsModalRef,private readonly enquiryservice:EnquiryService) { 
  }
  gender(){

  }
  ngOnInit(): void {
   this.createEnquiryForm();
  }
  closepopup(){
    this.bsModelref.hide();
  }
  createEnquiryForm(){
    this.enquiryForm=new FormGroup({
      enquiryName:new FormControl(''),
      mobileNo:new FormControl(''),
      enquiryForm:new FormControl(''),
      email:new FormControl(''),
      gender:new FormControl(''),
      dob:new FormControl('')
    })
  }
  clickEnquiry(){
  this.enquiryListData={
    enquiryName:this.enquiryForm.get('enquiryName')?.value,
    phoneNo:this.enquiryForm.get('mobileNo')?.value,
    enquiryFor:this.enquiryForm.get('enquiryForm')?.value,
    email:this.enquiryForm.get('email')?.value,
    gender:this.enquiryForm.get('gender')?.value,
    dob:this.enquiryForm.get('dob')?.value
  }
  this.enquiryservice.addNewEnquiryData(this.enquiryListData).subscribe(res=>{
    alert(res);
    console.log(res);
    this.closepopup();
    this.event.emit("saved data");

  })
  console.log(this.enquiryForm.value)
  }
}
