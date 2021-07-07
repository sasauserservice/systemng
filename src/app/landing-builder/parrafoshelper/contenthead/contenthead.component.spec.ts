import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentheadComponent } from './contenthead.component';

describe('ContentheadComponent', () => {
  let component: ContentheadComponent;
  let fixture: ComponentFixture<ContentheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
