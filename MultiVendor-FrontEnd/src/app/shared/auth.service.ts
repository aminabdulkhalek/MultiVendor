import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthStateService } from './auth-state.service';
import { TokenService } from './token.service';
// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient, 
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService) { }
  // User registration
  register(body): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', body);
  }
  // Login
  signin(email, password): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', { email, password });
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
export const API_URL: string = "http://localhost:8000/api/"