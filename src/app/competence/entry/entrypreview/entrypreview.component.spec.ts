import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrypreviewComponent } from './entrypreview.component';

describe('EntrypreviewComponent', () => {
  let component: EntrypreviewComponent;
  let fixture: ComponentFixture<EntrypreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrypreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrypreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
