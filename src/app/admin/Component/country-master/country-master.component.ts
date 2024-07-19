import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../Service/country.service';
import { Icountry } from '../../Module/icountry';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-country-master',
  templateUrl: './country-master.component.html',
  styleUrls: ['./country-master.component.css']
})
export class CountryMasterComponent implements OnInit {

  firstDemo!:FormGroup;
  countries!:Icountry;
  title:string="Add Country";
  submitted:boolean=false;
  

  @Output() event:EventEmitter<string>=new EventEmitter<string>()
CountryName: any;
  /**
   *
   */
  constructor(private readonly _save:CountryService,private readonly bsModelref:BsModalRef) {
    
    
  }
  ngOnInit(): void {
    console.log("selected country",this.countries)
    this.createFormCountry();
    this.setFormValue();
  }
  closePop(){
    this.bsModelref.hide();
  }
  createFormCountry(){
    this.firstDemo=new FormGroup({
      CountryName:new FormControl('',Validators.required),
      Status:new FormControl('',Validators.required),
      
    
    
    })
   
    
   
  }
 

  clickPostData(){
    this. submitted=true;
  
    console.log("create object for save",this.countries)
    if(this.countries){
      this.countries={
        countryId:this.countries.countryId,
        countryName:this.firstDemo.get('CountryName')?.value,
        status:this.firstDemo.get('Status')?.value,
      }
      this._save.updateCountryList(this.countries).subscribe(res=>{
        alert(res);
        this.event.emit("Data has saved Successfully");
        this.closePop();
        console.log(this.firstDemo.value);
    
        
      })

    }
    else{
      this.countries={
        countryName:this.firstDemo.get('CountryName')?.value,
        status:this.firstDemo.get('Status')?.value,
      }
      this._save.addNewCountry(this.countries).subscribe(res=>{
        alert(res);
        this.event.emit("Data has saved Successfully");
        this.closePop();
        console.log(res);
    
        
      })
    }
   
  }
  setFormValue(){
    if(this.countries){
      this.firstDemo.patchValue({
        CountryName:this.countries.countryName,
        Status:this.countries.status,
      })
    }
    
  }

}
