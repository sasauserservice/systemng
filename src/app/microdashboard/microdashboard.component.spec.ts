import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrodashboardComponent } from './microdashboard.component';

describe('MicrodashboardComponent', () => {
  let component: MicrodashboardComponent;
  let fixture: ComponentFixture<MicrodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrodashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
