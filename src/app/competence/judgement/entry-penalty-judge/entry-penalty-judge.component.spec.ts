import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPenaltyJudgeComponent } from './entry-penalty-judge.component';

describe('EntryPenaltyJudgeComponent', () => {
  let component: EntryPenaltyJudgeComponent;
  let fixture: ComponentFixture<EntryPenaltyJudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryPenaltyJudgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPenaltyJudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
