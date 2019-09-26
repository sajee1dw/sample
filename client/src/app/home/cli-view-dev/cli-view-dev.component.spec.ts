import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliViewDevComponent } from './cli-view-dev.component';

describe('CliViewDevComponent', () => {
  let component: CliViewDevComponent;
  let fixture: ComponentFixture<CliViewDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliViewDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliViewDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
