import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsGeneratorComponent } from './claims-generator.component';

describe('ClaimsGeneratorComponent', () => {
  let component: ClaimsGeneratorComponent;
  let fixture: ComponentFixture<ClaimsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
