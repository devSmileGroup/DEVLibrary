import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model'
import { CardsService } from '../../servises/cards.service';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.css']
})
export class CardsFormComponent implements OnInit {

  cardTitle: string = ''
  cardGenre: string = ''
  cardAuthor: string = ''
  cardDate: string = ''
  cardImage: string = ''
  cardDescription: string = ''
  cardCount: number

  constructor(private service: CardsService) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.cardTitle === '' || this.cardGenre === '' || this.cardAuthor === '' || this.cardDate === '' || this.cardImage === '' || this.cardDescription === '') alert("please fill all fields")
    else {
      if (this.cardCount == undefined) this.cardCount = 0
      const card = new Card(
        this.cardTitle,
        this.cardGenre,
        this.cardAuthor,
        this.cardDate,
        this.cardImage,
        this.cardDescription,
        this.cardCount
      )
      this.service.addCard(card)
      this.cardTitle = ''
      this.cardGenre = ''
      this.cardAuthor = ''
      this.cardDate = ''
      this.cardImage = ''
      this.cardDescription = ''
      this.cardCount = undefined
    }
  }

  // onLoad() {
  //   this.service.loadCards()
  // }
}
