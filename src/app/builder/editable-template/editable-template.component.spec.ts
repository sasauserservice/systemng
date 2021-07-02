import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTemplateComponent } from './editable-template.component';

describe('EditableTemplateComponent', () => {
  let component: EditableTemplateComponent;
  let fixture: ComponentFixture<EditableTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
