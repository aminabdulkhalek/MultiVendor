import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService, API_URL } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';


@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {
  logout=faSignOut;
  notification = faBell;
  imagePath = "";
  isDash = true;
  isSignedIn!: boolean;
  vendor_name;
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
    if (localStorage.getItem('user_type') != '1'){
      localStorage.removeItem('user_type');
      this.signOut()
    }
    this.getInfo()
  }
  signOut() {
    this.authService.signOut();
  }
  getInfo(){
    const body = {id: localStorage.getItem('user_id')}
    this.http.post<any>(API_URL+'user/name',body).subscribe({
      next: data => {
        this.vendor_name = data.Name;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'vendor/get-profile').subscribe({
      next: data => {
        this.imagePath = data.vendor.logo;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
   


