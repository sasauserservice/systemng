import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleimagesComponent } from './googleimages.component';

describe('GoogleimagesComponent', () => {
  let component: GoogleimagesComponent;
  let fixture: ComponentFixture<GoogleimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
