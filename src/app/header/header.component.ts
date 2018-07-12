import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

// import * as $ from 'jquery';
// import { LogOut } from '../store/actions/auth.actions';
import { ApppState } from '../redux/app.state';
import { CardsService } from '../cards.service';

// import { Card } from '../card.model'

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText: string = ""
  // getState: Observable<any>;
  // isAuthenticated: false;
  // user = null;
  // errorMessage = null;
  // private store: Store<AppState> in constructor
  constructor(private store: Store<ApppState>, private service: CardsService) {

  }


  ngOnInit() {
    // $('.dropdown-trigger').dropdown();
    // this.getState.subscribe((state) => {
    //   this.isAuthenticated = state.isAuthenticated;
    //   this.user = state.user;
    //   this.errorMessage = state.errorMessage;
    // });
  }

  onKey(event: any) {
    this.searchCard()
  }

  clearInput() {
    this.searchText = ""
    this.service.loadCards()
  }

  logOut(): void {
    // this.store.dispatch(new LogOut);
  }
  searchCard() {
    // console.log(this.searchText)
    if (this.searchText === '') { this.service.loadCards() }
    else { this.service.searchCard(this.searchText) }
  }

}
