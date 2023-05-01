import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTrainersPageComponent } from './dashboard-trainers-page.component';

describe('DashboardTrainersPageComponent', () => {
  let component: DashboardTrainersPageComponent;
  let fixture: ComponentFixture<DashboardTrainersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTrainersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTrainersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
