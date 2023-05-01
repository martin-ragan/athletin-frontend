import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {currentUserSelector} from "../../../auth/store/selectors";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  protected isTrainer = false;
  constructor(private readonly store: Store) {}
  ngOnInit() {
    this.store.select(currentUserSelector).subscribe(val => {
      this.isTrainer = val?.isTrainer ?? false;
    })
  }

}
