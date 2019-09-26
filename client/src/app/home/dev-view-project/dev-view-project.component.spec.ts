import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevViewProjectComponent } from './dev-view-project.component';

describe('DevViewProjectComponent', () => {
  let component: DevViewProjectComponent;
  let fixture: ComponentFixture<DevViewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevViewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
