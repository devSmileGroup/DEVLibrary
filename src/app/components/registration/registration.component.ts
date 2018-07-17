import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

// import { User } from '../models/user.model';
// import { AppState, AuthState } from '../store/app.states';
// import { SignUp } from '../store/actions/auth.actions';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // user: User = new User();
  // getState: Observable<any>;
  // errorMessage: string | null;

  constructor() {
    // this.getState = this.store.select(AuthState);
  }

  ngOnInit() {
    // this.getState.subscribe((state) => {
    //   this.errorMessage = state.errorMessage;
    // });
  }

  // onSubmit(): void {
  //   const payload = {
  //     email: this.user.email,
  //     password: this.user.password
  //   };
  //   this.store.dispatch(new SignUp(payload));
  // }

}
