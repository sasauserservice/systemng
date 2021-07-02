import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextinsertComponent } from './textinsert.component';

describe('TextinsertComponent', () => {
  let component: TextinsertComponent;
  let fixture: ComponentFixture<TextinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextinsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
