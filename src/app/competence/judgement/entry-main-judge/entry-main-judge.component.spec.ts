import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryMainJudgeComponent } from './entry-main-judge.component';

describe('EntryMainJudgeComponent', () => {
  let component: EntryMainJudgeComponent;
  let fixture: ComponentFixture<EntryMainJudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryMainJudgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryMainJudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
