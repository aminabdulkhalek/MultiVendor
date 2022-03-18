import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vendor-dashboard', component: VendorDashboardComponent },
  { path: 'vendor-products', component: VendorProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
