import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faSignOut, faBell, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
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

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(NewTransactionModalComponent);
  }

  ngOnInit(): void {
  }

}
