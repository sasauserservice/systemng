import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafosComponent } from './parrafos.component';

describe('ParrafosComponent', () => {
  let component: ParrafosComponent;
  let fixture: ComponentFixture<ParrafosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParrafosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrafosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
