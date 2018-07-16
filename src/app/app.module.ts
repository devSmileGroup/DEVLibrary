import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { ErrorInterceptor, TokenInterceptor } from './services/token.interceptor';

import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CategoriesComponent } from './categories/categories.component';

import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './card/card.component';
import { CardsFormComponent } from './cards-form/cards-form.component';
import { cardsReducer } from './redux/cards.reducer';
import { CardsService } from './cards.service'
import { HttpModule } from '@angular/http';
import { CardPageComponent } from './card-page/card-page.component';

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
    CardPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    StoreModule.forRoot(reducers, {}),
    StoreModule.forRoot({ cardPage: cardsReducer }),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    CardsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
