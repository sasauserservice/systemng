import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAthleteComponent } from './entry-athlete.component';

describe('EntryAthleteComponent', () => {
  let component: EntryAthleteComponent;
  let fixture: ComponentFixture<EntryAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryAthleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
