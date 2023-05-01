import {Component, OnInit} from '@angular/core';
import {TrainersService} from "../trainers.service";
import {Trainer} from "../../shared/state.types";

@Component({
  selector: 'app-trainers-list-page',
  templateUrl: './trainers-list-page.component.html',
  styleUrls: ['./trainers-list-page.component.scss']
})
export class TrainersListPageComponent implements OnInit {
  protected trainers: Trainer [] = [];
  constructor(private readonly trainersService: TrainersService) { }

  ngOnInit(): void {
    this.trainersService.getTrainers().subscribe((trainers) => {
      this.trainers = trainers;
    });
  }

}
