import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { INewRegistration } from '../../Module/inew-registration';
import { NewRegistrationService } from '../../Service/new-registration.service';
import { ImageuploadService } from '../../Service/imageupload.service';
import { CountryService } from '../../Service/country.service';
import { StateService } from '../../Service/state.service';

import { SubcasteService } from '../../Service/subcaste.service';
import { Iqualification } from '../../Module/iqualification';
import { QualificationService } from '../../Service/qualification.service';
import { ProfessionService } from '../../Service/profession.service';
import { Igotra } from '../../Module/igotra';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  newRegistrationForm!: FormGroup;
  newRegistration!: INewRegistration;
  //  newRegistrationList:INewRegistration[]=[];
  CountryList: any[] = [];
  stateList: any[] = [];
  SubCasteList: any[] = [];
  selectProfile: any[] = []
  ProfileId: any;
  QualificationList: Iqualification[] = [];
  GotraList: Igotra[] = [];
  professionList: any[] = [];
  DistrictList: any[] = [];
  constructor(private readonly newregistrationservice: NewRegistrationService, private readonly imageservice: ImageuploadService,
    private readonly countryservic: CountryService,
    private readonly _stateservice: StateService,
   
    private readonly _subcasteservice: SubcasteService,
    private readonly _qualificationservice: QualificationService,
    private readonly _professionservice: ProfessionService,


  ) { }
  ngOnInit(): void {
    this.createNewRegistration();
    //  this.getListnewRegistration();
    this.getQualification();
    this.getProfession();
    this.getCountry();
    this.GetSubCaste();
    this.getState();
  }
  createNewRegistration() {
    this.newRegistrationForm = new FormGroup({
      profileId: new FormControl('00000000-0000-0000-0000-000000000000 '),
      location: new FormControl(''),
      Religion: new FormControl(''),
      Age: new FormControl(''),
      MaritalStatus: new FormControl(''),
      Height: new FormControl(''),
      Caste: new FormControl(''),
      Complexion: new FormControl(''),
      SubCaste: new FormControl(''),
      HomeLocation: new FormControl(''),
      Gotra: new FormControl(''),
      District: new FormControl(''),
      Qualification: new FormControl(''),
      State: new FormControl(''),
      Profession: new FormControl(''),
      Country: new FormControl(''),

    })

  }

  selectedFileValue(files:any){
    let getvalue=<File>files[0];
    this.selectProfile.push(getvalue.name)
  }
    
  saveRegistration() {

    this.newRegistration = {
      profileId: this.newRegistrationForm.get('profileId')?.value,
      location: this.newRegistrationForm.get('location')?.value,
      religion: this.newRegistrationForm.get('Religion')?.value,
      age: this.newRegistrationForm.get('Age')?.value,
      maritalStatus: this.newRegistrationForm.get('MaritalStatus')?.value,
      height: this.newRegistrationForm.get('Height')?.value,
      caste: this.newRegistrationForm.get('Caste')?.value,
      complexion: this.newRegistrationForm.get('Complexion')?.value,
      subCasteId: this.newRegistrationForm.get('SubCaste')?.value,
      homeLocation: this.newRegistrationForm.get('HomeLocation')?.value,
      gotraId: this.newRegistrationForm.get('Gotra')?.value,
      districtId: this.newRegistrationForm.get('District')?.value,
      qualificationId: this.newRegistrationForm.get('Qualification')?.value,
      stateId: this.newRegistrationForm.get('State')?.value,
      professionId: this.newRegistrationForm.get('Profession')?.value,
      countryId: this.newRegistrationForm.get('Country')?.value,
      //multipleImageProfiles:this.selectProfile
    }
    console.log(this.newRegistration);
    this.newregistrationservice.addNewRegistration(this.newRegistration).subscribe(res => {
      debugger;
      this.ProfileId = res;
      this.imageservice.addMultipleImage(this.selectProfile, this.ProfileId).subscribe(res => {
        alert("Image Uploaded");
      })
    })

  }
  //  getListnewRegistration(){
  //   this.newregistrationservice .getNewRegistrationList().subscribe({
  //     next:(data)=>{
  //       this.newRegistrationList=data;
  //     },
  //     error:(err)=>console.log(err)
  //   })
  // }
  // OnSelectState(event:any){
  //   let id=event.target.value
  // }
  getCountry() {
    this.countryservic.getCountry().subscribe(res => {
      this.CountryList = res;
    })
  }
  getState(){
    this._stateservice.getState().subscribe(res=>{
      this.stateList=res;
    })
  }
  // GetStateList(countryId:string){
  //   this.newregistrationservice.getStateById(countryId).subscribe(res=>{
  //     this.stateList=res;
  //   })
  // }
  SelectState(event: any) {
    let countryId = event.target.value
   
    this.newregistrationservice.getStateById(countryId).subscribe(res => {
      this.stateList = res;

     
    })

  }
  selectDitrict(event:any){
    let stateId = event.target.value
    this.newregistrationservice.getDistrictById(stateId).subscribe(res=>{
      this.DistrictList=res;
    })
  }
  GetSubCaste() {
    this._subcasteservice.getSubCaste().subscribe(res => {
      this.SubCasteList = res;

    })
  }
  OnSeleteGotra(event: any) {
    let subCasteId = event.target.value;
    this.newregistrationservice.getGotra(subCasteId).subscribe(res => {
      this.GotraList = res;
    })
  }

  getQualification() {
    this._qualificationservice.getQualification().subscribe({
      next: (data) => {
        console.log(data)
        this.QualificationList = data;
      }
    })
  }
  getProfession() {
    this._professionservice.getProfessionData().subscribe(res => {
      console.log(res);
      this.professionList = res;
    })
  }


}
