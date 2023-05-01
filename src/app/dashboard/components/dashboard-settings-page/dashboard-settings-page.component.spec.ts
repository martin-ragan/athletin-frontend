import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSettingsPageComponent } from './dashboard-settings-page.component';

describe('DashboardSettingsPageComponent', () => {
  let component: DashboardSettingsPageComponent;
  let fixture: ComponentFixture<DashboardSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSettingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
