import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GotraMasterComponent } from '../gotra-master/gotra-master.component';
import { GotraService } from '../../Service/gotra.service';
import { Igotra } from '../../Module/igotra';

@Component({
  selector: 'app-gotra-master-list',
  templateUrl: './gotra-master-list.component.html',
  styleUrls: ['./gotra-master-list.component.css']
})
export class GotraMasterListComponent implements OnInit{
  gotralist:Igotra[]=[];
  modalRef!: BsModalRef;
  selectedGotra!:Igotra;

   constructor(private readonly bsmodalService: BsModalService,private readonly _gotraservice:GotraService) {}
   AddGotra(){
    this.openModal("Add Gotra")
   }
   openModal(title:string) {
      this.modalRef = this.bsmodalService.show(GotraMasterComponent,{
        class:('model-xl'),
        initialState:{
          gotralist:this.selectedGotra,
          title:title
        }
      }
      
        )
        this.modalRef.content.event.subscribe((res:any)=>{
          console.log("after saved popup reponse",res);
          this.getGotraListData();
        })
        
        
   }
   
   ngOnInit(): void {
    this. getGotraListData();
    }
   getGotraListData(){
    this._gotraservice.getGotraList().subscribe(result=>{
      if(result && result !==null && result.length>0){
        this.gotralist=result;
    }
    })
  
   }
   deleteGotra(gotraid:any){
    if(confirm("Do you want to delete")){
      this._gotraservice.deletegotraData(gotraid).subscribe(res=>{
        alert(res);
        console.log(res);
        this.getGotraListData();

      })
    }
   }
   updateEditData(gotralist:Igotra){
    console.log(gotralist);
    this.openModal("Edit Gotra");
    this.selectedGotra=gotralist;
   }
}
