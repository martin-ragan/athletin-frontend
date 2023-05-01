import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkoutsPageComponent } from './dashboard-workouts-page.component';

describe('DashboardWorkoutsPageComponent', () => {
  let component: DashboardWorkoutsPageComponent;
  let fixture: ComponentFixture<DashboardWorkoutsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWorkoutsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWorkoutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
