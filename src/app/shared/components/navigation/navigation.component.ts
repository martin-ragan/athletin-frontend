import {Component, Input, OnInit} from '@angular/core';
import {createFeatureSelector, createSelector, Store} from "@ngrx/store";
import {BehaviorSubject, debounceTime, map } from "rxjs";
import {AuthState} from "../../state.types";
import {currentUserSelector} from "../../../auth/store/selectors";



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() darkMode: boolean = false;
  isLogged$ = new BehaviorSubject(false);
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.select(currentUserSelector).pipe(
      map((currentUser) => {
        if (currentUser) {
          this.isLogged$.next(true);
        } else {
          this.isLogged$.next(false);
        }
      })).subscribe();
  }
}
