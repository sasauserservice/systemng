import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGlobalJudgementComponent } from './entry-global-judgement.component';

describe('EntryGlobalJudgementComponent', () => {
  let component: EntryGlobalJudgementComponent;
  let fixture: ComponentFixture<EntryGlobalJudgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryGlobalJudgementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGlobalJudgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
