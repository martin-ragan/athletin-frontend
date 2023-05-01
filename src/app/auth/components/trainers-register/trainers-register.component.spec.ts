import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersRegisterComponent } from './trainers-register.component';

describe('TrainersRegisterComponent', () => {
  let component: TrainersRegisterComponent;
  let fixture: ComponentFixture<TrainersRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
