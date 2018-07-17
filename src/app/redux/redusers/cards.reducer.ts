// import { Card } from "../../card.model";
// import { Action } from "@ngrx/store";
import { CARD_ACTION, CarsAction } from "../actions/cards.action";

const initialState = {
    cards: [],
    lengthOfCards: 0
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
            return {
                ...state,
                cards: [...state.cards]
            }
        case CARD_ACTION.LOAD_CARDS:
            return {
                ...state,
                cards: [...action.payload],
                lengthOfCards: action.numberOfCards
            }

        case CARD_ACTION.FILTER_CARDS:
            return {
                ...state,
                cards: [...state.cards.filter(c => c.genre == action.payload)]
            }
        // case CARD_ACTION.SEARCH_CARDS:
        //     return {
        //         ...state,
        //         cards: [...state.cards.filter(c => ((c.title).search(action.payload)) !== -1)]
        //     }

        default:
            return state

    }
}