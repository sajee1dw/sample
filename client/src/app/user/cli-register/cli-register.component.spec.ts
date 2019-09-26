import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliRegisterComponent } from './cli-register.component';

describe('CliRegisterComponent', () => {
  let component: CliRegisterComponent;
  let fixture: ComponentFixture<CliRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
