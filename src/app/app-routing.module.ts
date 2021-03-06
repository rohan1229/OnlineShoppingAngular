import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderconfirmationComponent } from './components/orderconfirmation/orderconfirmation.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ProductdescriptionComponent } from './components/productdescription/productdescription.component';
import { LoginCheckComponent } from './components/login-check/login-check.component';
import { UserService } from "./user.service";
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { RetailerLoginComponent } from './components/retailer-login/retailer-login.component';
import { RetailerRegisterComponent } from "./components/retailer-register/retailer-register.component";
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login-user',component:LoginComponent},
  {path:'register-user',component:RegisterComponent},
  {path:'products',component:ProductInfoComponent},
  {path:'offers',component:OffersComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'productdescription',component:ProductdescriptionComponent},
  {path:'cart',component:CartComponent},
  {path:'login-check',component:LoginCheckComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'retailer-login',component:RetailerLoginComponent},
  {path:'retailer-register',component:RetailerRegisterComponent},
  {path:'view-product',component:ViewProductComponent},
  {path:'add-product',component:AddProductComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
