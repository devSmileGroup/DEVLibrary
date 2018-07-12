import { Component, OnInit, Input, Output } from '@angular/core';
// import * as $ from 'jquery'
// import { shallowEqual } from '@angular/router/src/utils/collection';
// import { Card } from '../card.model'
import { Store } from '@ngrx/store';
import { ApppState } from '../redux/app.state';
import { FilterCards } from '../redux/cards.action';
import { CardsService } from '../cards.service';

declare var $: any;


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // @Input() card: Card


  constructor(private store: Store<ApppState>, private service: CardsService) {
    // $('.sidenav-toggle').sideNav();

  }

  ngOnInit() {
    // $(document).ready(function () {
    //   $('.sidenav-toggle').sideNav();
    // });


  }

  // changeColor(a) {
  //   var i = 0

  //   var item = document.getElementsByClassName("collapsible-header")
  //   while (i < item.length) {
  //     if (item[i].textContent === a) {
  //       if (item[i].style.backgroundColor == "rgb(38, 166, 154)") { item[i].style.backgroundColor = "#ffffff"; this.service.loadCards() }
  //       else { item[i].style.backgroundColor = "#26a69a"; this.store.dispatch(new FilterCards(a)) }
  //     } i++;
  //   }
  // }

  showOnly(a) {
    console.log(a)
    // this.changeColor(a);

  }
}

