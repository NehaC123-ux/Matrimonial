import { Component, OnInit } from '@angular/core';
import { QualificationMasterComponent } from '../qualification-master/qualification-master.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Iqualification } from '../../Module/iqualification';
import { QualificationService } from '../../Service/qualification.service';

@Component({
  selector: 'app-qualification-master-list',
  templateUrl: './qualification-master-list.component.html',
  styleUrls: ['./qualification-master-list.component.css']
})
export class QualificationMasterListComponent implements OnInit{
  qualificationlist:Iqualification[]=[];
  modalRef!: BsModalRef;
  selectedQualification!:Iqualification;
  constructor(private modalService: BsModalService,private readonly qualificationservice:QualificationService) {}
  ngOnInit(): void {
    this.getQualificationData();
  }
  addQualification(){
    this.openModal("Add Qualification");
  }
  openModal(title:string) {
     this.modalRef = this.modalService.show(QualificationMasterComponent,{
      class:('model-xl'),
      initialState:{
        qualificatData:this.selectedQualification,
        title:title
      }
     
     })
     this.modalRef.content.event.subscribe((res:any)=>{
      console.log("after saved data popup response",res);
      this.getQualificationData();
     })
      
    }
    getQualificationData(){
      
      this.qualificationservice.getQualification().subscribe({
        next:(data)=>{
          this.qualificationlist=data;
          console.log(data);

        },
        error:(e)=>console.error(e)
      })
    }
    deleteQualification(qualificationId:any){
      if(confirm("Do you want to delete")){
        this.qualificationservice.deleteQulificationData(qualificationId).subscribe(res=>{
          alert(res);
          console.log(res);
          this.getQualificationData();
        })
      }
    }
    updateDataqualification(qualification:Iqualification){
      console.log(qualification);
      this.openModal("Edit Qualification");
      this.selectedQualification=qualification;
      
    }
  





}
