import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;

  errors: any = null;
  user: User = { 
    name: '', 
    email: this.email, 
    password: this.password, 
    password_confirmation: ''
  };



  constructor(
    private router: Router,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) { }

  ngOnInit(): void {
  }
  redirectToSignup() {
    this.router.navigate(['signup'])
  }
  login() {
    this.authService.signin(this.email,this.password).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
      }
    );
  }
  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
    console.log(data);
  }

}

