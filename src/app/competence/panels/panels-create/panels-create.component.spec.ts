import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsCreateComponent } from './panels-create.component';

describe('PanelsCreateComponent', () => {
  let component: PanelsCreateComponent;
  let fixture: ComponentFixture<PanelsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
