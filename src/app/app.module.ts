import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductInfoComponent},
  {path:'offers',component:OffersComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'productdescription',component:ProductdescriptionComponent},
  {path:'cart',component:CartComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    OffersComponent,
    CheckoutComponent,
    CartComponent,
    OrderconfirmationComponent,
    ResetpasswordComponent,
    ProductdescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
