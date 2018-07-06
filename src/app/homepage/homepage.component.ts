import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cards } from '../card.model'
import { callbackify } from 'util';
import { ApppState } from '../redux/app.state';
import { Card } from '../card.model'
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // getState: Observable<any>;
  // isAuthenticated: false;
  // user = null;
  // errorMessage = null;
  public cardState: Observable<Cards>

  constructor(private store: Store<ApppState>, private service: CardsService) { }

  // constructor(private store: Store<AppState>) {
  //   this.getState = this.store.select(AuthState);
  // }

  ngOnInit() {
    // this.getState.subscribe((state) => {
    //   this.isAuthenticated = state.isAuthenticated;
    //   this.user = state.user;
    //   this.errorMessage = state.errorMessage;
    // });

    // this.store.select('cardPage').subscribe(({ cards }) => {
    //   this.cards = cards
    // })
    this.service.loadCards()
    this.cardState = this.store.select('cardPage')

  }


}
