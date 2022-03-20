import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SidebarComponent } from './vendor/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdersTableComponent } from './vendor/vendor-dashboard/orders-table/orders-table.component';
import { ProductsTableComponent } from './vendor/vendor-dashboard/products-table/products-table.component';
import { CustomersTableComponent } from './vendor/vendor-dashboard/customers-table/customers-table.component';
import { RecentOrdersTableComponent } from './vendor/vendor-dashboard/recent-orders-table/recent-orders-table.component';
import { RecentReviewsTableComponent } from './vendor/vendor-dashboard/recent-reviews-table/recent-reviews-table.component';
import { IncomeTableComponent } from './vendor/vendor-dashboard/income-table/income-table.component';
import { HomeComponent } from './home/home.component';
import { VendorProductsComponent ,AddProductModalComponent} from './vendor/vendor-products/vendor-products.component';
import { ProductsComponent ,UpdateProductModalComponent} from './vendor/vendor-products/products/products.component';
import {MatTableModule} from '@angular/material/table';
import { BarRatingModule } from "ngx-bar-rating";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ProgressComponent } from './vendor/vendor-products/progress/progress.component';
import { DndDirective } from './dnd.directive';
import { VendorOrdersComponent } from './vendor/vendor-orders/vendor-orders.component';
import { VendorOrdersTableComponent } from './vendor/vendor-orders/vendor-orders-table/vendor-orders-table.component';
import { VendorCustomersComponent } from './vendor/vendor-customers/vendor-customers.component';
import { VendorCustomersTableComponent } from './vendor/vendor-customers/vendor-customers-table/vendor-customers-table.component';
import { VendorReviewsComponent } from './vendor/vendor-reviews/vendor-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    VendorDashboardComponent,
    SidebarComponent,
    OrdersTableComponent,
    ProductsTableComponent,
    CustomersTableComponent,
    RecentOrdersTableComponent,
    RecentReviewsTableComponent,
    IncomeTableComponent,
    HomeComponent,
    VendorProductsComponent,
    ProductsComponent,
    AddProductModalComponent,
    ProgressComponent,
    DndDirective,
    UpdateProductModalComponent,
    VendorOrdersComponent,
    VendorOrdersTableComponent,
    VendorCustomersComponent,
    VendorCustomersTableComponent,
    VendorReviewsComponent
  ],
  entryComponents: [
    AddProductModalComponent,
    MatDialogModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatProgressBarModule,
    MatTableModule,
    BarRatingModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
