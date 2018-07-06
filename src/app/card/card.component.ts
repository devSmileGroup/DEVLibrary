import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card.model'
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card

  constructor(private srevice: CardsService) { }

  ngOnInit() {
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
