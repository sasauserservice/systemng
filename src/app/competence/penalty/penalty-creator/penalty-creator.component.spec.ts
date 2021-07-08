import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyCreatorComponent } from './penalty-creator.component';

describe('PenaltyCreatorComponent', () => {
  let component: PenaltyCreatorComponent;
  let fixture: ComponentFixture<PenaltyCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaltyCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
