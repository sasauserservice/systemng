import { TestBed } from '@angular/core/testing';

import { EditableTemplateService } from './editable-template.service';

describe('EditableTemplateService', () => {
  let service: EditableTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditableTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
