import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkoutDetailPageComponent } from './dashboard-workout-detail-page.component';

describe('DashboardWorkoutDetailPageComponent', () => {
  let component: DashboardWorkoutDetailPageComponent;
  let fixture: ComponentFixture<DashboardWorkoutDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWorkoutDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWorkoutDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
