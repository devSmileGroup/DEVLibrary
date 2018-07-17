import { Card } from "../models/card.model";
import { Category } from "../models/category.model";

export interface ApppState {
    cardPage: {
        cards: Card[],
        lengthOfCards: number
    },
    categoryPage: {
        categories: Category[]
    }
}