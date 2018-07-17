import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { Store } from '@ngrx/store';
import { ApppState } from '../../redux/app.state';
import { CategoriesService } from '../../servises/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category: Category


  constructor(private store: Store<ApppState>, private service: CategoriesService) {

  }

  OnDeleteCategory() {
    this.service.deleteCategory(this.category)
  }

}

