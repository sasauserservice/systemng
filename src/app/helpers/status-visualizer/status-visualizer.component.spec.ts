import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusVisualizerComponent } from './status-visualizer.component';

describe('StatusVisualizerComponent', () => {
  let component: StatusVisualizerComponent;
  let fixture: ComponentFixture<StatusVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
