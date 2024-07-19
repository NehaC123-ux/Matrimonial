import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CountryMasterComponent } from '../country-master/country-master.component';
import { CountryService } from '../../Service/country.service';
import { Icountry } from '../../Module/icountry';
import { Title } from '@angular/platform-browser';
import { Igotra } from '../../Module/igotra';

@Component({
  selector: 'app-country-master-list',
  templateUrl: './country-master-list.component.html',
  styleUrls: ['./country-master-list.component.css']
})
export class CountryMasterListComponent implements OnInit {

  countryData:Icountry[]=[];
   selectedcountry!:Icountry;
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService,private readonly _service:CountryService) {}
  AddCountry(){
    this.openModal("Add Country");
  }
  openModal(title:string) {
     this.modalRef = this.modalService.show(CountryMasterComponent,{
      class:('model-xl'),
      initialState:{
        countries:this.selectedcountry,
        title:title
        
      }

      // initialState:{
      //   icountryData:this.selectedcountry
      // }
     } )
     this.modalRef.content.event.subscribe((res:any)=>{
      console.log("After popur close response",res);
      this.getCountryList();

     })
  }
  ngOnInit(): void {
    this.getCountryList();
  }
  getCountryList(){
    this._service.getCountry().subscribe({
      next:(data)=>{
        this.countryData=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
      
    });
  }
  deleteCountry(countryId:any){
    if(confirm("Do you want to delete")){
      this._service.deleteCountrydata(countryId).subscribe(res=>{
        alert(res);
        console.log(res);
        this.getCountryList();

      })
    }

  }
  updateCountryData(countries:Icountry){
     this.selectedcountry = countries;
    console.log(countries);
    
    this.openModal("Edit Country");
  }

}
