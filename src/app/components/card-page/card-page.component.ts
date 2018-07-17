import { Component, OnInit, Input } from '@angular/core';
import { ApppState } from '../../redux/app.state';
import { Cards } from '../../models/card.model';
import { Store } from '@ngrx/store';
import { CardsService } from '../../servises/cards.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})

export class CardPageComponent implements OnInit {
  public cardState: Observable<Cards>
  public pageNumber: number[]
  public stateNumber: number
  public classLeft: string
  public classActive: string[]

  constructor(private store: Store<ApppState>, private service: CardsService) {
    this.pageNumber = [1, 2, 3, 4, 5, 6, 7]
    this.stateNumber = 1
    this.classLeft = "disabled"
    this.classActive = ["active", "waves-effect", "waves-effect", "waves-effect", "waves-effect", "waves-effect", "waves-effect"]
  }

  ngOnInit() {
    this.service.paginationCard("", 0)
    this.cardState = this.store.select('cardPage')
    console.log()
  }


  nextPage(np) {
    for (let i in this.classActive) {
      this.classActive[i] = "waves-effect"
    }
    this.classActive[np] = "active"
    this.service.paginationCard("", np)
  }


  addStateNumber() {
    for (let numb in this.pageNumber) {
      this.pageNumber[numb] += 7;
    }
    this.stateNumber++
    this.classLeft = ""
    this.nextPage(0)
  }

  backStateNumber() {
    if (this.stateNumber > 1) {
      for (let numb in this.pageNumber) {
        this.pageNumber[numb] -= 7;
      } this.stateNumber--
      this.nextPage(6)
    }
    if (this.stateNumber === 1) {
      this.classLeft = "disabled"
    }

  }
}
