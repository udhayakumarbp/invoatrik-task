import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTooltripComponent } from './dashboard-tooltrip.component';

describe('DashboardTooltripComponent', () => {
  let component: DashboardTooltripComponent;
  let fixture: ComponentFixture<DashboardTooltripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTooltripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTooltripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
