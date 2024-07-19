import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCasteMasterListComponent } from './sub-caste-master-list.component';

describe('SubCasteMasterListComponent', () => {
  let component: SubCasteMasterListComponent;
  let fixture: ComponentFixture<SubCasteMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCasteMasterListComponent]
    });
    fixture = TestBed.createComponent(SubCasteMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
