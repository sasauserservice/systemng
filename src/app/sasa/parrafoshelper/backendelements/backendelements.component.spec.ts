import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendelementsComponent } from './backendelements.component';

describe('BackendelementsComponent', () => {
  let component: BackendelementsComponent;
  let fixture: ComponentFixture<BackendelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendelementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
