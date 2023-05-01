import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientRequestsPageComponent } from './dashboard-client-requests-page.component';

describe('DashboardClientRequestsPageComponent', () => {
  let component: DashboardClientRequestsPageComponent;
  let fixture: ComponentFixture<DashboardClientRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClientRequestsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClientRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
