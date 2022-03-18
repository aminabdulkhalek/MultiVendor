import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'vendor-dashboard',component:VendorDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
