import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafoshelperComponent } from './parrafoshelper.component';

describe('ParrafoshelperComponent', () => {
  let component: ParrafoshelperComponent;
  let fixture: ComponentFixture<ParrafoshelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParrafoshelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrafoshelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
