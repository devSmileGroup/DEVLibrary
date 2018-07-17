import { Action } from "@ngrx/store";
import { Card } from "../../models/card.model";

export namespace CARD_ACTION {
    export const ADD_CARD = 'ADD_CARD'
    export const DELETE_CARD = 'DELETE_CARD'
    export const UPDATE_CARD = 'UPDATE_CARD'
    export const LOAD_CARDS = 'LOAD_CARDS'
    export const FILTER_CARDS = 'FILTER_CARDS'
    export const GET_LENGTH = 'GET_LENGTH'

    // export const SEARCH_CARDS = 'SEARCH_CARDS'
}

export class AddCard implements Action {
    readonly type = CARD_ACTION.ADD_CARD

    constructor(public payload: Card) { }
}

export class DeleteCard implements Action {
    readonly type = CARD_ACTION.DELETE_CARD

    constructor(public payload: Card) { }
}

export class UpdateCard implements Action {
    readonly type = CARD_ACTION.UPDATE_CARD

    constructor(public payload: Card) { }
}

export class LoadCards implements Action {
    readonly type = CARD_ACTION.LOAD_CARDS

    constructor(public payload: Card[], public numberOfCards: number) { }
}

export class FilterCards implements Action {
    readonly type = CARD_ACTION.FILTER_CARDS

    constructor(public payload) { }
}

// export class SearchCard implements Action {
//     readonly type = CARD_ACTION.SEARCH_CARDS

//     constructor(public payload) { }
// }



export type CarsAction = AddCard | DeleteCard | UpdateCard | LoadCards | FilterCards 