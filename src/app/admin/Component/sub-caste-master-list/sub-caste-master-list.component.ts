import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SubCasteMasterComponent } from '../sub-caste-master/sub-caste-master.component';
import { Isubcaste } from '../../Module/isubcaste';
import { SubcasteService } from '../../Service/subcaste.service';
import { Istate } from '../../Module/istate';

@Component({
  selector: 'app-sub-caste-master-list',
  templateUrl: './sub-caste-master-list.component.html',
  styleUrls: ['./sub-caste-master-list.component.css']
})
export class SubCasteMasterListComponent implements OnInit{

  subCasteData:Isubcaste[]=[];
  selectedSubcaste!:Isubcaste
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService,private readonly _subcasteservice:SubcasteService) {}
  ngOnInit(): void {
    this.getSubCasteList();
  }
  AddSubcaste(){
      this.openModal("Add Subcaste");
  }
  openModal(title:string) {
     this.modalRef = this.modalService.show(SubCasteMasterComponent,{
      class:('model-xl'), 
      initialState:{
        subCastelist:this.selectedSubcaste,
        title:title
      }
     } )
     this.modalRef.content.event.subscribe((res:any)=>{
        console.log("After close popup reponse",res);
        this.getSubCasteList();
     })
    }
    getSubCasteList(){
      this._subcasteservice.getSubCaste().subscribe({
        next:(data)=>{
          this.subCasteData=data;
          console.log(data);

        },
        error:(e)=>console.log(e)
      });
    }
    deleteSubCaste(subcasteId:any){
    this._subcasteservice.deleteSubCasteDetails(subcasteId).subscribe(res=>{
      alert(res);
      this.getSubCasteList();
      console.log(res);
    })
    }
    Editdata(subCastelist: Isubcaste) {
      console.log(subCastelist);
      this.openModal("Edit Subcaste");
      this.selectedSubcaste=subCastelist;

      }
}
