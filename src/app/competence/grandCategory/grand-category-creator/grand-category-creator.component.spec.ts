import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandCategoryCreatorComponent } from './grand-category-creator.component';

describe('GrandCategoryCreatorComponent', () => {
  let component: GrandCategoryCreatorComponent;
  let fixture: ComponentFixture<GrandCategoryCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandCategoryCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandCategoryCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
