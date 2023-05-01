import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersDetailPageComponent } from './trainers-detail-page.component';

describe('TrainersDetailPageComponent', () => {
  let component: TrainersDetailPageComponent;
  let fixture: ComponentFixture<TrainersDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
