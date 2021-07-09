import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsListComponent } from './panels-list.component';

describe('PanelsListComponent', () => {
  let component: PanelsListComponent;
  let fixture: ComponentFixture<PanelsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
