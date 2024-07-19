import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationListComponent } from './new-registration-list.component';

describe('NewRegistrationListComponent', () => {
  let component: NewRegistrationListComponent;
  let fixture: ComponentFixture<NewRegistrationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegistrationListComponent]
    });
    fixture = TestBed.createComponent(NewRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
