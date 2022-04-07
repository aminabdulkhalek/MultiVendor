import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { User, AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
  selected_value = 1;
  errors: any = null;

  country;
  state;
  gender !:string;
  date_of_birth: any;
  pipe


  constructor(
    private router: Router,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) { }

  ngOnInit(): void {
  }
  redirectToLogin() {
    this.router.navigate(['login'])
  }
  signup1() {
    const body = {
      user_type: 1,
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    }
    this.authService.register(body).subscribe(
      (result) => {
        console.log(result);
        this.redirectToLogin();
      },
      (error) => {
        console.log(error)
        this.errors = error.error;
      },

    );
  }
  signup2() {

    this.pipe = new DatePipe('en-US');
    const myFormattedDate = this.pipe.transform(this.date_of_birth, 'yyyy-MM-dd');
    const body = {
      user_type: 2,
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
      country : this.country,
      state: this.state,
      gender:  this.gender,
      date_of_birth: myFormattedDate
    }

    console.log(body)
    this.authService.register(body).subscribe(
      (result) => {
        console.log(result);
        this.redirectToLogin();
      },
      (error) => {
        console.log(error)
        this.errors = error.error;
      },

    );
  }
}

