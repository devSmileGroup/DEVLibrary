import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
