import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as $ from 'jquery';
import { LogOut } from '../store/actions/auth.actions';
import { AppState } from '../store/app.states';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    $('.dropdown-trigger').dropdown();
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}
