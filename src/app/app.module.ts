import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ServicesPageComponent } from './pages/clinic/services-page/services-page.component';
import { ProductsPageComponent } from './pages/clinic/products-page/products-page.component';
import { ServiceCategoriesPageComponent } from './pages/clinic/service-categories-page/service-categories-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { AttendancePageComponent } from './pages/clinic/attendance-page/attendance-page.component';
import { CostumersPageComponent } from './pages/clinic/costumers-page/costumers-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/clinic/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceListComponent } from './components/clinic/service-list/service-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    ServicesPageComponent,
    ProductsPageComponent,
    ServiceCategoriesPageComponent,
    FramePageComponent,
    AttendancePageComponent,
    CostumersPageComponent,
    ProductListComponent,
    ServiceListComponent
    
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
