import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEditableViewComponent } from './banner-editable-view.component';

describe('BannerEditableViewComponent', () => {
  let component: BannerEditableViewComponent;
  let fixture: ComponentFixture<BannerEditableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEditableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEditableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
