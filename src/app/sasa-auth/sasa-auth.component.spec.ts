import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SasaAuthComponent } from './sasa-auth.component';

describe('SasaAuthComponent', () => {
  let component: SasaAuthComponent;
  let fixture: ComponentFixture<SasaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SasaAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SasaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
