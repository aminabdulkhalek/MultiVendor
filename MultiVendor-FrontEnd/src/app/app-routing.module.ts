import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendorCustomersComponent } from './vendor/vendor-customers/vendor-customers.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { VendorOrdersComponent } from './vendor/vendor-orders/vendor-orders.component';
import { VendorProductsComponent } from './vendor/vendor-products/vendor-products.component';
import { VendorReviewsComponent } from './vendor/vendor-reviews/vendor-reviews.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vendor-dashboard', component: VendorDashboardComponent },
  { path: 'vendor-products', component: VendorProductsComponent },
  { path: 'vendor-orders', component: VendorOrdersComponent },
  { path: 'vendor-customers', component: VendorCustomersComponent },
  { path: 'vendor-reviews', component: VendorReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
