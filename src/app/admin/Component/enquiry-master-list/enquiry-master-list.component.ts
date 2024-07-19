import { Component, OnInit } from '@angular/core';
import { EnquiryMasterComponent } from '../enquiry-master/enquiry-master.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Ienquiry } from '../../Module/ienquiry';
import { EnquiryService } from '../../Service/enquiry.service';

@Component({
  selector: 'app-enquiry-master-list',
  templateUrl: './enquiry-master-list.component.html',
  styleUrls: ['./enquiry-master-list.component.css']
})
export class EnquiryMasterListComponent implements OnInit{
  enquiryData:Ienquiry[]=[];
  modalRef!: BsModalRef;
   constructor(private readonly bsmodalService: BsModalService,private readonly _enquiryservice:EnquiryService) {}
   openModal() {
      this.modalRef = this.bsmodalService.show(EnquiryMasterComponent,{
        class:('model-xl')
      
      })
      this.modalRef.content.event.subscribe((res:any)=>{
        console.log("after close popup result",res)
        this.getEnquiryDataList();
      })
    }
    ngOnInit(): void {
      this.getEnquiryDataList();
    }
    getEnquiryDataList(){
      this._enquiryservice.getEnquiryList().subscribe({
        next:(data)=>{
          console.log(data);
          this.enquiryData=data;
        },
        error:(e)=>console.error(e)
      })
    }
      
  


}
