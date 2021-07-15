import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorEditManagerComponent } from './competitor-edit-manager.component';

describe('CompetitorEditManagerComponent', () => {
  let component: CompetitorEditManagerComponent;
  let fixture: ComponentFixture<CompetitorEditManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitorEditManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorEditManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
