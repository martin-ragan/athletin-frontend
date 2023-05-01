import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfileCardComponent } from './trainer-profile-card.component';

describe('TrainerProfileCardComponent', () => {
  let component: TrainerProfileCardComponent;
  let fixture: ComponentFixture<TrainerProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerProfileCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
