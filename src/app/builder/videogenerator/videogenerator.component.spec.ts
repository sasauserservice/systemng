import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogeneratorComponent } from './videogenerator.component';

describe('VideogeneratorComponent', () => {
  let component: VideogeneratorComponent;
  let fixture: ComponentFixture<VideogeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
