import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CountryMasterComponent } from './Component/country-master/country-master.component';
import { HomeComponent } from './Component/home/home.component';
import { CountryMasterListComponent } from './Component/country-master-list/country-master-list.component';
import { StateMasterComponent } from './Component/state-master/state-master.component';
import { StateMasterListComponent } from './Component/state-master-list/state-master-list.component';
import { DistrictMasterListComponent } from './Component/district-master-list/district-master-list.component';
import { SubCasteMasterListComponent } from './Component/sub-caste-master-list/sub-caste-master-list.component';
import { GotraMasterListComponent } from './Component/gotra-master-list/gotra-master-list.component';
import { QualificationMasterListComponent } from './Component/qualification-master-list/qualification-master-list.component';
import { ProfessionMasterListComponent } from './Component/profession-master-list/profession-master-list.component';
import { EnquiryMasterListComponent } from './Component/enquiry-master-list/enquiry-master-list.component';
import { NewRegistrationComponent } from './Component/new-registration/new-registration.component';
import { NewRegistrationListComponent } from './Component/new-registration-list/new-registration-list.component';

// import { ImageUploadComponent } from './Component/image-upload/image-upload.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children:[
          {path:'Counrtylist',component:CountryMasterListComponent},
          {path:'statelist',component:StateMasterListComponent},
          {path:'districtlist',component:DistrictMasterListComponent},
          {path:'subcastelist',component:SubCasteMasterListComponent},
          {path:'gotralist',component:GotraMasterListComponent},
          {path:"qualificationlist",component:QualificationMasterListComponent},
          {path:'professionlist',component:ProfessionMasterListComponent},
          {path:"enquirylist",component:EnquiryMasterListComponent},
          {path:'Home',component:HomeComponent},
          {path:'registration',component:NewRegistrationComponent},
          {path:'viewregistration',component:NewRegistrationListComponent}
          // {path:'imageload',component:ImageUploadComponent}


]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
