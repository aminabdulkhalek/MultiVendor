import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminVednorsComponent } from './admin/admin-vednors/admin-vednors.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { VendorCustomersComponent } from './vendor/vendor-customers/vendor-customers.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { VendorOrdersComponent } from './vendor/vendor-orders/vendor-orders.component';
import { VendorProductsComponent } from './vendor/vendor-products/vendor-products.component';
import { VendorReviewsComponent } from './vendor/vendor-reviews/vendor-reviews.component';
import { VendorSettingsComponent } from './vendor/vendor-settings/vendor-settings.component';
import { AdminComissionsComponent } from './admin/admin-comissions/admin-comissions.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminTransactionsComponent } from './admin/admin-transactions/admin-transactions.component';
import { AdminReviewsComponent } from './admin/admin-reviews/admin-reviews.component';
import { AdminCustomersComponent } from './admin/admin-customers/admin-customers.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { ProductsPageComponent } from './Customer/products/products-page.component';
import { ShopsComponent } from './Customer/shops/shops.component';
import { ShopComponent } from './Customer/shop/shop.component';
import { ProductComponent } from './Customer/product/product.component';
import { ShoppingCartComponent } from './Customer/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './Customer/checkout/checkout.component';
import { WishlistComponent } from './Customer/wishlist/wishlist.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'vendor-dashboard', component: VendorDashboardComponent },
  { path: 'vendor-products', component: VendorProductsComponent },
  { path: 'vendor-orders', component: VendorOrdersComponent },
  { path: 'vendor-customers', component: VendorCustomersComponent },
  { path: 'vendor-reviews', component: VendorReviewsComponent },
  { path: 'vendor-settings', component: VendorSettingsComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'admin-vendors', component: AdminVednorsComponent },
  { path: 'admin-commissions', component: AdminComissionsComponent },
  { path: 'admin-orders', component: AdminOrdersComponent },
  { path: 'admin-transactions', component: AdminTransactionsComponent },
  { path: 'admin-reviews', component: AdminReviewsComponent },
  { path: 'admin-customers', component: AdminCustomersComponent },

  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'shop/:id', component: ShopComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishlistComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
