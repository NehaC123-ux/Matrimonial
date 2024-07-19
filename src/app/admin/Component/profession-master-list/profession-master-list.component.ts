import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessionMasterComponent } from '../profession-master/profession-master.component';
import { Iprofession } from '../../Module/iprofession';
import { ProfessionService } from '../../Service/profession.service';

@Component({
  selector: 'app-profession-master-list',
  templateUrl: './profession-master-list.component.html',
  styleUrls: ['./profession-master-list.component.css']
})
export class ProfessionMasterListComponent implements OnInit{
  professionList:Iprofession[]=[];
  modalRef!: BsModalRef;
  selectedProfesssion!:Iprofession;
  constructor(private modalService: BsModalService,private readonly professionservice:ProfessionService) {}
  addProfession(){
    this.openModal("Add Profession");
  }
  openModal(title:string) {
     this.modalRef = this.modalService.show(ProfessionMasterComponent,{
      class:("model-xl"),
      initialState:{
        profession:this.selectedProfesssion,
        title:title
      }
     });
     this.modalRef.content.event.subscribe((res:any)=>{
      console.log("after saved close popup response",res)
      this.getProfessionDetails();

     })
     
    
  }
  ngOnInit(): void {
    this.getProfessionDetails();
  }
  getProfessionDetails(){
    this.professionservice.getProfessionData().subscribe({
      next:(data)=>{
        console.log(data);
        this.professionList=data;
      },
      error:(e)=>console.error(e)
    })
  }
  deleteProfession(professionId:any){
    if(confirm("Do you want to delete it")){
      this.professionservice.deleteProfessionData(professionId).subscribe(res=>{
        alert(res);
        console.log(res);
        this.getProfessionDetails();
      })
    }
  }
  editDisplayData(profession:Iprofession){
    console.log(profession);
    this.openModal("Edit Profession");
    this.selectedProfesssion=profession;
    
  }
}
