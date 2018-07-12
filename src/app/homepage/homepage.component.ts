import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cards } from '../card.model'
import { ApppState } from '../redux/app.state';
import { CardsService } from '../cards.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public cardState: Observable<Cards>

  constructor(private store: Store<ApppState>, private service: CardsService) {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var options = {};
      var instances = M.Modal.init(elems, options);
    });

  }

  showModal() {
    console.log("showModal")
  }


  ngOnInit() {

    this.service.loadCards()
    this.cardState = this.store.select('cardPage')

  }


}
