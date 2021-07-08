import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterCreatorComponent } from './parameter-creator.component';

describe('ParameterCreatorComponent', () => {
  let component: ParameterCreatorComponent;
  let fixture: ComponentFixture<ParameterCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
