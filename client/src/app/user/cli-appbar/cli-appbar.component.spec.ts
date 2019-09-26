import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliAppbarComponent } from './cli-appbar.component';

describe('CliAppbarComponent', () => {
  let component: CliAppbarComponent;
  let fixture: ComponentFixture<CliAppbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliAppbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
