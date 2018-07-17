import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Store } from "@ngrx/store";
import { ApppState } from "../redux/app.state";
import { map } from "rxjs/operators";
import { Category } from "../models/category.model";
import { LoadCategory, AddCategory, DeleteCategory } from "../redux/actions/category.action";

@Injectable()
export class CategoriesService {

    static BASE_ULR: string = 'http://localhost:3000/'

    constructor(private http: Http, private store: Store<ApppState>) { }

    LoadCategory(): void {
        this.http.get(CategoriesService.BASE_ULR + 'category')
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then((categories: Category[]) => {
                this.store.dispatch(new LoadCategory(categories))
            })

    }

    addCategory(category: Category) {
        this.http.post(CategoriesService.BASE_ULR + 'category', category)
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then((category: Category) => {
                this.store.dispatch(new AddCategory(category))
            })

    }
    deleteCategory(category: Category) {
        this.http.delete(CategoriesService.BASE_ULR + 'category/' + category.id)
            .pipe(map((response: Response) => response.json()))
            .toPromise()
            .then(_ => {
                this.store.dispatch(new DeleteCategory(category))
            })
    }
}