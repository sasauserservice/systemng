import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsEditComponent } from './panels-edit.component';

describe('PanelsEditComponent', () => {
  let component: PanelsEditComponent;
  let fixture: ComponentFixture<PanelsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
