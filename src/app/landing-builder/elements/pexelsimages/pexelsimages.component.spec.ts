import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexelsimagesComponent } from './pexelsimages.component';

describe('PexelsimagesComponent', () => {
  let component: PexelsimagesComponent;
  let fixture: ComponentFixture<PexelsimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PexelsimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PexelsimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
