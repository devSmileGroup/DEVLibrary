import { Component, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card.model'
import { CardsService } from '../../servises/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card
  @Output() selectedCard: Card

  constructor(private srevice: CardsService) {

    // document.addEventListener('DOMContentLoaded', function () {
    //   console.log("sdasd")
    //   var elems = document.querySelectorAll('.modal');
    //   var options = {};
    //   var instances = M.Modal.init(elems, options);
    // });


  }

  ngOnInit() {

  }

  onView() {
    console.log("onView")
  }

  onDelete() {
    this.srevice.deleteCard(this.card)
  }

  onAddCard() {
    if (this.card.count > 1) { this.card.count-- }
    else if (this.card.count === 1) { this.card.count--; this.card.isSold = true }
    // else { this.card.isSold = true }
    this.srevice.updateCard(this.card)

  }

  onBackCard() {
    if (this.card.count === 0) { this.card.count++; this.card.isSold = false }
    else { this.card.count++ }
    // else { this.card.isSold = true }
    this.srevice.updateCard(this.card)

  }
}
