import { Card } from "../card.model";
// import { Action } from "@ngrx/store";
import { CARD_ACTION, CarsAction } from "./cards.action";

const initialState = {
    cards: []
}

export function cardsReducer(state = initialState, action: CarsAction) {
    switch (action.type) {
        case CARD_ACTION.ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            }
        case CARD_ACTION.DELETE_CARD:
            return {
                ...state,
                cards: [...state.cards.filter(c => c.id !== action.payload.id)]
            }
        case CARD_ACTION.UPDATE_CARD:
            const idx = state.cards.findIndex(c => c.id === action.payload.id)
            // if (this.card.count != 0) { this.card.count = this.card.count - 1 }
            // else { this.card.isSold = true }
            // if (state.cards[idx].count != 0) { state.cards[idx].count-- }
            // else { state.cards[idx].isSold = true }
            return {
                ...state,
                cards: [...state.cards]
            }
        case CARD_ACTION.LOAD_CARDS:
            return {
                ...state,
                cards: [...action.payload]
            }

        case CARD_ACTION.FILTER_CARDS:
            return {
                ...state,
                cards: [...state.cards.filter(c => c.genre == action.payload)]
            }

        default:
            return state

    }
}