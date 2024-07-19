import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotraMasterListComponent } from './gotra-master-list.component';

describe('GotraMasterListComponent', () => {
  let component: GotraMasterListComponent;
  let fixture: ComponentFixture<GotraMasterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotraMasterListComponent]
    });
    fixture = TestBed.createComponent(GotraMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
