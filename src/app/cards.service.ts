import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { ApppState } from "./redux/app.state";
import { Store } from "@ngrx/store";
import { Card } from "./card.model";
import { LoadCards, AddCard, DeleteCard, UpdateCard, FilterCards } from "./redux/cards.action";
import { map } from "rxjs/operators";

@Injectable()
export class CardsService {

    static BASE_URL: string = 'http://localhost:3000/'

    constructor(private http: Http, private store: Store<ApppState>) { }

    loadCards(): void {

        this.http.get(CardsService.BASE_URL + 'cards')
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then((cards: Card[]) => {
                this.store.dispatch(new LoadCards(cards))
            })

    }

    searchCard(input: string): void {

        this.http.get(CardsService.BASE_URL + 'cards')
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then((cards: Card[]) => {
                let nCards = cards.filter(c => ((c.title.toLowerCase()).search(input.toLowerCase())) !== -1)
                this.store.dispatch(new LoadCards(nCards))
            })

    }
    // filterCards(category): void {

    //     this.http.get(CardsService.BASE_URL + 'cards')
    //         .pipe(map((response: Response) => response.json()))
    //         .toPromise()
    //         .then(_ => {
    //             this.store.dispatch(new FilterCards(category))
    //         })

    // }

    addCard(card: Card) {
        this.http.post(CardsService.BASE_URL + 'cards', card)
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then((card: Card) => {
                this.store.dispatch(new AddCard(card))
            })
    }

    deleteCard(card: Card) {
        this.http.delete(CardsService.BASE_URL + 'cards/' + card.id)
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then(_ => {
                this.store.dispatch(new DeleteCard(card))
            })
    }

    updateCard(card: Card) {
        this.http.put(CardsService.BASE_URL + 'cards/' + card.id, card)
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then((card: Card) => {
                this.store.dispatch(new UpdateCard(card))
            })
    }
}