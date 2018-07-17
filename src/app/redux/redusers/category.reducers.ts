import { CATEGORY_ACTION,  CategoriesAction } from "../actions/category.action";


const initialState={
categories:[]
}
export function categoriesReducer(state = initialState, action:CategoriesAction){
    switch(action.type){
        case CATEGORY_ACTION.ADD_CATEGORY:
        return{
            ...state,
            categories:[...state.categories, action.payload]
        }
        case CATEGORY_ACTION.DELETE_CATEGORY:
        return{
            ...state,
            categories:[...state.categories.filter(c=>c.id !==action.payload.id)]
        }
        case CATEGORY_ACTION.LOAD_CATEGORY:
        return{
            ...state,
            categories:[...action.payload]
        }
        default:
        return state
    }

}