import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CountryMasterComponent } from './Component/country-master/country-master.component';

import { HomeComponent } from './Component/home/home.component';
import { CountryMasterListComponent } from './Component/country-master-list/country-master-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateMasterComponent } from './Component/state-master/state-master.component';
import { StateMasterListComponent } from './Component/state-master-list/state-master-list.component';
import { DistrictMasterComponent } from './Component/district-master/district-master.component';
import { DistrictMasterListComponent } from './Component/district-master-list/district-master-list.component';
import { SubCasteMasterComponent } from './Component/sub-caste-master/sub-caste-master.component';
import { SubCasteMasterListComponent } from './Component/sub-caste-master-list/sub-caste-master-list.component';
import { GotraMasterComponent } from './Component/gotra-master/gotra-master.component';
import { GotraMasterListComponent } from './Component/gotra-master-list/gotra-master-list.component';
import { QualificationMasterComponent } from './Component/qualification-master/qualification-master.component';
import { QualificationMasterListComponent } from './Component/qualification-master-list/qualification-master-list.component';
import { ProfessionMasterComponent } from './Component/profession-master/profession-master.component';
import { ProfessionMasterListComponent } from './Component/profession-master-list/profession-master-list.component';
import { EnquiryMasterComponent } from './Component/enquiry-master/enquiry-master.component';
import { EnquiryMasterListComponent } from './Component/enquiry-master-list/enquiry-master-list.component';
import { NewRegistrationComponent } from './Component/new-registration/new-registration.component';
import { UploadFileComponent } from './Component/upload-file/upload-file.component';
import { NewRegistrationListComponent } from './Component/new-registration-list/new-registration-list.component';




@NgModule({
  declarations: [
    AdminComponent,
    CountryMasterComponent,
  
    HomeComponent,
       CountryMasterListComponent,
       StateMasterComponent,
       StateMasterListComponent,
       DistrictMasterComponent,
       DistrictMasterListComponent,
       SubCasteMasterComponent,
       SubCasteMasterListComponent,
       GotraMasterComponent,
       GotraMasterListComponent,
       QualificationMasterComponent,
       QualificationMasterListComponent,
       ProfessionMasterComponent,
       ProfessionMasterListComponent,
       EnquiryMasterComponent,
       EnquiryMasterListComponent,
       NewRegistrationComponent,
       UploadFileComponent,
       NewRegistrationListComponent
      
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
