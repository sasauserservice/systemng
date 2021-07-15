import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryListManagerComponent } from './entry-list-manager.component';

describe('EntryListManagerComponent', () => {
  let component: EntryListManagerComponent;
  let fixture: ComponentFixture<EntryListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryListManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
