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
import { VendorReviewsTableComponent } from './vendor/vendor-reviews/vendor-reviews-table/vendor-reviews-table.component';
import { VendorSettingsComponent } from './vendor/vendor-settings/vendor-settings.component';
import { BannerUploadComponent } from './vendor/vendor-settings/banner-upload/banner-upload.component';
import { LogoUploadComponent } from './vendor/vendor-settings/logo-upload/logo-upload.component';
import {MatIconModule} from '@angular/material/icon';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { OrdersBoxComponent } from './admin/admin-dashboard/orders-box/orders-box.component';
import { ProductsBoxComponent } from './admin/admin-dashboard/orders-box/products-box/products-box.component';
import { CustomersBoxComponent } from './admin/admin-dashboard/customers-box/customers-box.component';
import { IncomeBoxComponent } from './admin/admin-dashboard/income-box/income-box.component';
import { FeaturedBoxComponent } from './admin/admin-dashboard/featured-box/featured-box.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductsTableComponent } from './admin/admin-products/admin-products-table/admin-products-table.component';
import {MatRadioModule} from '@angular/material/radio';
import { AdminVednorsComponent } from './admin/admin-vednors/admin-vednors.component';
import { AdminVendorsTableComponent } from './admin/admin-vednors/admin-vendors-table/admin-vendors-table.component';
import { AdminComissionsComponent } from './admin/admin-comissions/admin-comissions.component';
import { AdminCommissionsTableComponent } from './admin/admin-comissions/admin-commissions-table/admin-commissions-table.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminOrdersTableComponent } from './admin/admin-orders/admin-orders-table/admin-orders-table.component';
import { AdminTransactionsComponent } from './admin/admin-transactions/admin-transactions.component';
import { AdminTransactionsTableComponent } from './admin/admin-transactions/admin-transactions-table/admin-transactions-table.component';
import { NewTransactionModalComponent } from './admin/admin-transactions/new-transaction-modal/new-transaction-modal.component';

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
    VendorReviewsComponent,
    VendorReviewsTableComponent,
    VendorSettingsComponent,
    LogoUploadComponent,
    BannerUploadComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    OrdersBoxComponent,
    ProductsBoxComponent,
    CustomersBoxComponent,
    IncomeBoxComponent,
    FeaturedBoxComponent,
    AdminProductsComponent,
    AdminProductsTableComponent,
    AdminVednorsComponent,
    AdminVendorsTableComponent,
    AdminComissionsComponent,
    AdminCommissionsTableComponent,
    AdminOrdersComponent,
    AdminOrdersTableComponent,
    AdminTransactionsComponent,
    AdminTransactionsTableComponent,
    NewTransactionModalComponent
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
    MatSelectModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
