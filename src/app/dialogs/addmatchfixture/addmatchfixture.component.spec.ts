import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatchfixtureComponent } from './addmatchfixture.component';

describe('AddmatchfixtureComponent', () => {
  let component: AddmatchfixtureComponent;
  let fixture: ComponentFixture<AddmatchfixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmatchfixtureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmatchfixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
