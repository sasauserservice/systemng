import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFrontendViewComponent } from './banner-frontend-view.component';

describe('BannerFrontendViewComponent', () => {
  let component: BannerFrontendViewComponent;
  let fixture: ComponentFixture<BannerFrontendViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFrontendViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFrontendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
