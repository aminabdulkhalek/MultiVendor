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
    if (data.user.user_type == 0) {
      this.router.navigate(['admin-dashboard'])
    }
    else if (data.user.user_type == 1){
      this.router.navigate(['vendor-dashboard'])
    }
    else if (data.user.user_type == 2){
      this.router.navigate(['customer-dashboard'])
    }
  }

}

