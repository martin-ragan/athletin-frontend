import {Component, Input, OnInit} from '@angular/core';
import {Trainer} from "../../../shared/state.types";
import {TrainersService} from "../../trainers.service";

@Component({
  selector: 'app-trainer-profile-card',
  templateUrl: './trainer-profile-card.component.html',
  styleUrls: ['./trainer-profile-card.component.scss']
})
export class TrainerProfileCardComponent implements OnInit {
  @Input() trainer!: Trainer;
  constructor() { }

  ngOnInit(): void {
  }
}
