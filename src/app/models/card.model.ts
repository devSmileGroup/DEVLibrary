export class Card {
    constructor(
        public title: string,
        public genre: string,
        public author: string,
        public date: string,
        public image: string,
        public description: string,
        public count: number,
        public id?: number,
        public isSold = false

    ) { }
}

export interface Cards {
    cards: Card[],
    lengthOfCards: number
}