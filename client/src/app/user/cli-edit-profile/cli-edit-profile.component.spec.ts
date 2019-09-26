import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliEditProfileComponent } from './cli-edit-profile.component';

describe('CliEditProfileComponent', () => {
  let component: CliEditProfileComponent;
  let fixture: ComponentFixture<CliEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
