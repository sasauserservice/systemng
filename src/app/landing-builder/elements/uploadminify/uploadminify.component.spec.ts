import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadminifyComponent } from './uploadminify.component';

describe('UploadminifyComponent', () => {
  let component: UploadminifyComponent;
  let fixture: ComponentFixture<UploadminifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadminifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadminifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
