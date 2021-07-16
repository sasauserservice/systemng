import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsToPanelsComponent } from './events-to-panels.component';

describe('EventsToPanelsComponent', () => {
  let component: EventsToPanelsComponent;
  let fixture: ComponentFixture<EventsToPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsToPanelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsToPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
