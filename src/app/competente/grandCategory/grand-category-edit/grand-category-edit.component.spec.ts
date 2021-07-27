import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandCategoryEditComponent } from './grand-category-edit.component';

describe('GrandCategoryEditComponent', () => {
  let component: GrandCategoryEditComponent;
  let fixture: ComponentFixture<GrandCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
