import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

// import { reducers } from './store/app.states';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/card/card.component';
import { CardsFormComponent } from './components/cards-form/cards-form.component';
import { cardsReducer } from './redux/redusers/cards.reducer';
import { CardsService } from './servises/cards.service'
import { HttpModule } from '@angular/http';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CategoryComponent } from './components/category/category.component';
import { categoriesReducer } from './redux/redusers/category.reducers';
import { CategoriesService } from './servises/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    CategoriesComponent,
    CardComponent,
    CardsFormComponent,
    CardPageComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot({ categoryPage: categoriesReducer, cardPage: cardsReducer }),
    AppRoutingModule
  ],
  providers: [
    CardsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
