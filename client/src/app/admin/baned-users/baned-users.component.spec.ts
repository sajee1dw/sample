import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanedUsersComponent } from './baned-users.component';

describe('BanedUsersComponent', () => {
  let component: BanedUsersComponent;
  let fixture: ComponentFixture<BanedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
