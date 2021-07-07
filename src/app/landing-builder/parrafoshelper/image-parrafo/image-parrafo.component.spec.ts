import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageParrafoComponent } from './image-parrafo.component';

describe('ImageParrafoComponent', () => {
  let component: ImageParrafoComponent;
  let fixture: ComponentFixture<ImageParrafoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageParrafoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageParrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
