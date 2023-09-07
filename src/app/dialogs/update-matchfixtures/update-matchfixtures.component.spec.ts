import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMatchfixturesComponent } from './update-matchfixtures.component';

describe('UpdateMatchfixturesComponent', () => {
  let component: UpdateMatchfixturesComponent;
  let fixture: ComponentFixture<UpdateMatchfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMatchfixturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMatchfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
