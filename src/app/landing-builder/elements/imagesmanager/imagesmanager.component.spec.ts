import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesmanagerComponent } from './imagesmanager.component';

describe('ImagesmanagerComponent', () => {
  let component: ImagesmanagerComponent;
  let fixture: ComponentFixture<ImagesmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
