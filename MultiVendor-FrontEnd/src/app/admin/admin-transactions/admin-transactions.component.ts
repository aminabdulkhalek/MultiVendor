import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faSignOut, faBell, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService, API_URL } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { NewTransactionModalComponent } from './new-transaction-modal/new-transaction-modal.component';

@Component({
  selector: 'app-admin-transactions',
  templateUrl: './admin-transactions.component.html',
  styleUrls: ['./admin-transactions.component.scss']
})
export class AdminTransactionsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  add = faPlusSquare;
  isSignedIn!: boolean;
  admin_name;
  errorMessage;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService :AuthService,
    private http: HttpClient,
    public dialog: MatDialog,
    ) { }
  openDialog() {
    this.dialog.open(NewTransactionModalComponent);
  }

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
