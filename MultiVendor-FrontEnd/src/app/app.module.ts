import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SidebarComponent } from './vendor/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdersTableComponent } from './vendor/vendor-dashboard/orders-table/orders-table.component';
import { ProductsTableComponent } from './vendor/vendor-dashboard/products-table/products-table.component';
import { CustomersTableComponent } from './vendor/vendor-dashboard/customers-table/customers-table.component';
import { RecentOrdersTableComponent } from './vendor/vendor-dashboard/recent-orders-table/recent-orders-table.component';
import { RecentReviewsTableComponent } from './vendor/vendor-dashboard/recent-reviews-table/recent-reviews-table.component';
import { IncomeTableComponent } from './vendor/vendor-dashboard/income-table/income-table.component';
import { HomeComponent } from './home/home.component';
import { VendorProductsComponent, AddProductModalComponent } from './vendor/vendor-products/vendor-products.component';
import { ProductsComponent, UpdateProductModalComponent } from './vendor/vendor-products/products/products.component';
import { MatTableModule } from '@angular/material/table';
import { BarRatingModule } from "ngx-bar-rating";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
import { MatIconModule } from '@angular/material/icon';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { OrdersBoxComponent } from './admin/admin-dashboard/orders-box/orders-box.component';
import { ProductsBoxComponent } from './admin/admin-dashboard/products-box/products-box.component';
import { CustomersBoxComponent } from './admin/admin-dashboard/customers-box/customers-box.component';
import { IncomeBoxComponent } from './admin/admin-dashboard/income-box/income-box.component';
import { FeaturedBoxComponent } from './admin/admin-dashboard/featured-box/featured-box.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductsTableComponent } from './admin/admin-products/admin-products-table/admin-products-table.component';
import { MatRadioModule } from '@angular/material/radio';
import { AdminVednorsComponent } from './admin/admin-vednors/admin-vednors.component';
import { AdminVendorsTableComponent } from './admin/admin-vednors/admin-vendors-table/admin-vendors-table.component';
import { AdminComissionsComponent } from './admin/admin-comissions/admin-comissions.component';
import { AdminCommissionsTableComponent } from './admin/admin-comissions/admin-commissions-table/admin-commissions-table.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminOrdersTableComponent } from './admin/admin-orders/admin-orders-table/admin-orders-table.component';
import { AdminTransactionsComponent } from './admin/admin-transactions/admin-transactions.component';
import { AdminTransactionsTableComponent } from './admin/admin-transactions/admin-transactions-table/admin-transactions-table.component';
import { NewTransactionModalComponent } from './admin/admin-transactions/new-transaction-modal/new-transaction-modal.component';
import { AdminReviewsComponent } from './admin/admin-reviews/admin-reviews.component';
import { AdminReviewsTableComponent } from './admin/admin-reviews/admin-reviews-table/admin-reviews-table.component';
import { AdminCustomersComponent } from './admin/admin-customers/admin-customers.component';
import { AdminCustomersTableComponent } from './admin/admin-customers/admin-customers-table/admin-customers-table.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { CarouselComponent } from './Customer/customer-dashboard/carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { ProductsGirdViewComponent } from './Customer/products/products-gird-view/products-gird-view.component';
import { ProductsPageComponent } from './Customer/products/products-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ProductListViewComponent } from './Customer/products/product-list-view/product-list-view.component';
import { ShopsComponent } from './Customer/shops/shops.component';
import { ShopBoxComponent } from './Customer/shops/shop-box/shop-box.component';
import { ShopComponent } from './Customer/shop/shop.component';
import { ProductComponent } from './Customer/product/product.component';
import { ShoppingCartComponent } from './Customer/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './Customer/checkout/checkout.component';
import { WishlistComponent } from './Customer/wishlist/wishlist.component';
import { WishlistItemComponent } from './Customer/wishlist/wishlist-item/wishlist-item.component';
import { OrderPlacedModalComponent } from './Customer/checkout/order-placed-modal/order-placed-modal.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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
    NewTransactionModalComponent,
    AdminReviewsComponent,
    AdminReviewsTableComponent,
    AdminCustomersComponent,
    AdminCustomersTableComponent,
    CustomerDashboardComponent,
    CarouselComponent,
    ProductsGirdViewComponent,
    ProductsPageComponent,
    ProductListViewComponent,
    ShopsComponent,
    ShopBoxComponent,
    ShopComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    WishlistComponent,
    WishlistItemComponent,
    OrderPlacedModalComponent,
    LoginComponent,
    SignupComponent
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
    MatRadioModule,
    IvyCarouselModule,
    HttpClientModule,
    GalleryModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgxSliderModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{
    provide: GALLERY_CONFIG,
    useValue: { dots: true, imageSize: 'cover' },
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
