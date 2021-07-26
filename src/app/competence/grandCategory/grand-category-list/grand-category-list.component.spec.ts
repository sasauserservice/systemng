import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandCategoryListComponent } from './grand-category-list.component';

describe('GrandCategoryListComponent', () => {
  let component: GrandCategoryListComponent;
  let fixture: ComponentFixture<GrandCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
