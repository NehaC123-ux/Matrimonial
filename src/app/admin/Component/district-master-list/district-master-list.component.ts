import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DistrictMasterComponent } from '../district-master/district-master.component';
import { Idistrict } from '../../Module/idistrict';
import { DistrictService } from '../../Service/district.service';
import { distinct } from 'rxjs';

@Component({
  selector: 'app-district-master-list',
  templateUrl: './district-master-list.component.html',
  styleUrls: ['./district-master-list.component.css']
})
export class DistrictMasterListComponent implements OnInit {
  districtList:Idistrict[]=[];
  selectedDistrict!:Idistrict;
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService,private readonly districtService:DistrictService) {}
  AddDistrict(){
    this.openDistrict("Add District");
  }
  openDistrict(title:string) {
     this.modalRef = this.modalService.show(DistrictMasterComponent,{
      class:('model-xl'),
      initialState:{
        // district:this.selectedDistrict,
        title:title
      }
      
     }
     
      )
      this.modalRef.content.event.subscribe((res:any)=>{
        console.log("After close popup ");
        this.getDistrictDetails();
      })
  }
  ngOnInit(): void {
   this.getDistrictDetails();
  }
  getDistrictDetails(){
    this.districtService.getDistrict().subscribe(result=>{
      if(result && result !==null && result.length>0){
        this.districtList=result;
      }
      
    })
     
  }
  deleteDistrict(districtId:any){
    if(confirm("Are you sure for delete")){
      this.districtService.deleteDistrictData(districtId).subscribe(res=>{
        alert(res);
        this.getDistrictDetails();
      })
    }
  }
  updatedisplayData(distinct:Idistrict){
    this.selectedDistrict=distinct;
    this.modalRef = this.modalService.show(DistrictMasterComponent,{

  class:("modal-md"),
  initialState:{
      district:this.selectedDistrict,
      title:"update district"
  }
  })
  this.modalRef.content.event.subscribe((res:any)=>{
    console.log("After close popup ");
    this.getDistrictDetails();
  })
}

}
