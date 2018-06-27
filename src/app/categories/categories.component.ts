import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

declare var $: any;


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() {
    // $('.sidenav-toggle').sideNav();
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.sidenav-toggle').sideNav();
    });
  }

}
