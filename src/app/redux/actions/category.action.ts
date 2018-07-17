import { Action } from "@ngrx/store";
import { Category } from "../../models/category.model";

export namespace CATEGORY_ACTION {
    export const ADD_CATEGORY = 'ADD_CATEGORY'
    export const DELETE_CATEGORY = 'DELETE_CATEGORY'
    export const LOAD_CATEGORY = 'LOAD_CATEGORY'

}
export class AddCategory implements Action {
    readonly type = CATEGORY_ACTION.ADD_CATEGORY
    constructor(public payload: Category) {

    }
}
export class DeleteCategory implements Action {
    readonly type = CATEGORY_ACTION.DELETE_CATEGORY
    constructor(public payload: Category) {

    }
}
export class LoadCategory implements Action {
    readonly type = CATEGORY_ACTION.LOAD_CATEGORY
    constructor(public payload: Category[]) {

    }
}
export type CategoriesAction = AddCategory | DeleteCategory | LoadCategory
