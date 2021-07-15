import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorCreateManagerComponent } from './competitor-create-manager.component';

describe('CompetitorCreateManagerComponent', () => {
  let component: CompetitorCreateManagerComponent;
  let fixture: ComponentFixture<CompetitorCreateManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitorCreateManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorCreateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
