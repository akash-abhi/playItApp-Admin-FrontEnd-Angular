import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchfixturesComponent } from './matchfixtures.component';

describe('MatchfixturesComponent', () => {
  let component: MatchfixturesComponent;
  let fixture: ComponentFixture<MatchfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchfixturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
