import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationMasterListComponent } from './qualification-master-list.component';

describe('QualificationMasterListComponent', () => {
  let component: QualificationMasterListComponent;
  let fixture: ComponentFixture<QualificationMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationMasterListComponent]
    });
    fixture = TestBed.createComponent(QualificationMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
