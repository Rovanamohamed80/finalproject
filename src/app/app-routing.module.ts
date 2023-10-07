import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundedComponent } from './notfounded/notfounded.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesNavbarComponent } from './categories-navbar/categories-navbar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [

  {path:"" , redirectTo:"home", pathMatch:"full"},
  { path:"home", canActivate:[authGuard] ,component: HomeComponent, title:"Home Component"},
  { path:"about",canActivate:[authGuard] ,component: AboutComponent, title:"About Component"},
  { path:"brands",canActivate:[authGuard] ,component: BrandComponent, title:"Brand Component"},
  { path:"cart",canActivate:[authGuard] ,component: CartComponent, title:"Cart Component"},
  { path:"wishlist",canActivate:[authGuard] ,component: WishlistComponent, title:"Wishlist Component"},
  { path:"products",canActivate:[authGuard] ,component: ProductsComponent, title:"Products Component"},
  { path:"forgotPassword",component: ForgotPasswordComponent, title:"ForgotPassword Component"},
  { path:"resetCode",component: ResetCodeComponent, title:"ResetCode Component"},
  { path:"resetPassword",component: ResetPasswordComponent, title:"ResetPassword Component"},
  { path:"categories",canActivate:[authGuard] ,component: CategoriesNavbarComponent, title:"Categories Component"},
  { path:"productDetails/:id",canActivate:[authGuard] ,component: ProductDetailsComponent, title:"ProductsDetails Component"},
  { path:"login",component: SignInComponent, title:"Sign In"},
  { path:"signup",component: SignUpComponent, title:"Sign Up"},
  { path:"checkout/:cartId",component: CheckoutComponent, title:"Check Out"},
  { path:"allorders",component: OrdersComponent, title:"Orders Component"},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) , title:"Cart" },
  { path:"**",component: NotfoundedComponent , title: '404'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
