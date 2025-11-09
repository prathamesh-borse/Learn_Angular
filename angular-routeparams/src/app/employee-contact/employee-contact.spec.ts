import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContact } from './employee-contact';

describe('EmployeeContact', () => {
  let component: EmployeeContact;
  let fixture: ComponentFixture<EmployeeContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
