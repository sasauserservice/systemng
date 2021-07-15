import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateManagerComponent } from './user-create-manager.component';

describe('UserCreateManagerComponent', () => {
  let component: UserCreateManagerComponent;
  let fixture: ComponentFixture<UserCreateManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
