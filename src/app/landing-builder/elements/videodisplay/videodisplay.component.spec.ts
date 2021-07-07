import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodisplayComponent } from './videodisplay.component';

describe('VideodisplayComponent', () => {
  let component: VideodisplayComponent;
  let fixture: ComponentFixture<VideodisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideodisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
