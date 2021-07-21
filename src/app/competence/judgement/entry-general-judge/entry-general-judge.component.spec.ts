import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGeneralJudgeComponent } from './entry-general-judge.component';

describe('EntryGeneralJudgeComponent', () => {
  let component: EntryGeneralJudgeComponent;
  let fixture: ComponentFixture<EntryGeneralJudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryGeneralJudgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGeneralJudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
