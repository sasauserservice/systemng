import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditManagerComponent } from './user-edit-manager.component';

describe('UserEditManagerComponent', () => {
  let component: UserEditManagerComponent;
  let fixture: ComponentFixture<UserEditManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
