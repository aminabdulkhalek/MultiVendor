import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placed-modal',
  templateUrl: './order-placed-modal.component.html',
  styleUrls: ['./order-placed-modal.component.scss']
})
export class OrderPlacedModalComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  redirectToShopping(){
    this.router.navigate(['products'])
    this.dialog.closeAll()
  }

}
