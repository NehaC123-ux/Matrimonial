import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StateMasterComponent } from '../state-master/state-master.component';
import { Istate } from '../../Module/istate';
import { StateService } from '../../Service/state.service';

@Component({
  selector: 'app-state-master-list',
  templateUrl: './state-master-list.component.html',
  styleUrls: ['./state-master-list.component.css']
})
export class StateMasterListComponent implements OnInit{
  stateData:Istate[]=[];
  modalRef!: BsModalRef;
  selectedState!:Istate;
  constructor(private modalService: BsModalService,private readonly _service:StateService) {}
  addState(){
    this.openSatae("Add State")
  }
  openSatae(title:string) {
     this.modalRef = this.modalService.show(StateMasterComponent,{
      class:('model-xl'),
      initialState:{
        states:this.selectedState,
        title:title
      }
     }
      )
      this.modalRef.content.event.subscribe((res:any)=>{
        console.log(" After popup close response",res);
        this.getStateDataList();
      })
  }
  ngOnInit(): void {
    this.getStateDataList();
  }
  getStateDataList(){
    this._service.getState().subscribe(result=>{
      if(result && result !==null && result.length>0){
          this.stateData=result;
      }
      
      
      
    }) 
  }
  deleteStateData(stateId:any){
    if(confirm("Are you sure for delete")){
      this._service.deleteStateDetails(stateId).subscribe(res=>{
        alert(res);
        this.getStateDataList();
      })
    }
  }
  UpdateStataData(states:Istate){
    console.log(states);
    this.openSatae("Edit State");
    this.selectedState=states
  }
  


}

