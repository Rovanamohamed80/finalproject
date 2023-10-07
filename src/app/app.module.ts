import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundedComponent } from './notfounded/notfounded.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Injectable } from '@angular/core';
import{ HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SliderWrapperComponent } from './slider-wrapper/slider-wrapper.component';
import { TrimPipe } from './trim.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoriesNavbarComponent } from './categories-navbar/categories-navbar.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundedComponent,
    AboutComponent,
    BrandComponent,
    CategoriesComponent,
    HomeComponent,
    ProductsComponent,
    SignInComponent,
    SignUpComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SliderWrapperComponent,
    TrimPipe,
    SearchPipe,
    CheckoutComponent,
    OrdersComponent,
    CategoriesNavbarComponent,
    WishlistComponent,
    ForgotPasswordComponent,
    ResetCodeComponent,
    ResetPasswordComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule
  ],
  providers: [
    {
     provide: HTTP_INTERCEPTORS,
     useClass: HttpInterceptorInterceptor,
     multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
