import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SidebarComponent } from './vendor-dashboard/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdersTableComponent } from './vendor-dashboard/orders-table/orders-table.component';
import { ProductsTableComponent } from './vendor-dashboard/products-table/products-table.component';
import { CustomersTableComponent } from './vendor-dashboard/customers-table/customers-table.component';
import { RecentOrdersTableComponent } from './vendor-dashboard/recent-orders-table/recent-orders-table.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorDashboardComponent,
    SidebarComponent,
    OrdersTableComponent,
    ProductsTableComponent,
    CustomersTableComponent,
    RecentOrdersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
