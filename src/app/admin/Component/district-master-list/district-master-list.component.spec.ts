import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMasterListComponent } from './district-master-list.component';

describe('DistrictMasterListComponent', () => {
  let component: DistrictMasterListComponent;
  let fixture: ComponentFixture<DistrictMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictMasterListComponent]
    });
    fixture = TestBed.createComponent(DistrictMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
