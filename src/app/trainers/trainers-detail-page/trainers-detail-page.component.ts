import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TrainersService} from "../trainers.service";
import {Client, Trainer, User} from "../../shared/state.types";
import {currentUserSelector} from "../../auth/store/selectors";
import {BehaviorSubject, debounceTime, map} from "rxjs";
import {Store} from "@ngrx/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-trainers-detail-page',
  templateUrl: './trainers-detail-page.component.html',
  styleUrls: ['./trainers-detail-page.component.scss']
})
export class TrainersDetailPageComponent implements OnInit {
  protected isLogged = false;
  private currentUser: User | null = null;
  protected trainer: Trainer | null = null;
  protected isSubscribed$ = new BehaviorSubject(false);
  protected reviewForm: FormGroup = new FormGroup({
    rating: new FormControl(1, Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    private readonly router: Router,
    private readonly trainersService: TrainersService,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.store.select(currentUserSelector).pipe(
      map((currentUser) => {
        this.isLogged = !!currentUser;
        this.currentUser = currentUser;
      })).subscribe();

    this.trainersService.getTrainerById(this.router.url.split('/')[2]).subscribe((trainer) => {
      this.trainer = trainer;

      if (this.isLogged) {
        this.isSubscribed$.next(!!(this.currentUser as Client).trainers.find((trainer) => trainer.id === this.trainer?.id));
      }
    });
  }

  protected sendRequest() {
    if (this.trainer) {
      this.trainersService.sendRequest(this.trainer.id).subscribe((isSuccess) => {
        if (isSuccess) {
          this.isSubscribed$.next(true);
        }
      });
    }
  }

  protected sendReview() {
    if (this.reviewForm && this.trainer?.id) {
      this.trainersService.sendReview(this.trainer.id, this.reviewForm.value).subscribe((newData) => {
        if (this.trainer) {
          this.trainer = {
            ...this.trainer,
            reviews: [...this.trainer.reviews, newData.addedReview],
            rating: newData.newAvg
          }
        }
      });
    }
  }
}
