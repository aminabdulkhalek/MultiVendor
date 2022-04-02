import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  isSignedIn!: boolean;
  admin_name;
  errorMessage;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService :AuthService,
    private http: HttpClient

  ) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
      if (!val) {
        this.router.navigate(['login']);
      }
    });
    if (localStorage.getItem('user_type') != '0'){
      localStorage.removeItem('user_type');
      this.signOut()
    }
    this.getName()
  }
  signOut() {
    this.authService.signOut();
  }
  getName(){
    const body = {id: localStorage.getItem('user_id')}
    this.http.post<any>(API_URL+'user/name',body).subscribe({
      next: data => {
        this.admin_name = data.Name;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
