import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../servises/cards.service';
import { CardPageComponent } from '../card-page/card-page.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchText: string

  constructor(private service: CardsService) {
  }

  ngOnInit() {
  }

  onKey(event: any) {
    this.searchCard()
  }

  clearInput() {
    this.searchText = ""
    this.service.paginationCard("", 0)
  }

  searchCard() {
    // if (this.searchText === ("" || " " || undefined)) { this.service.paginationCard("", 0).then((len) => { }) }
    // else {
    this.service.paginationCard(this.searchText, 0).then((len) => { })

    // }

  }
}
