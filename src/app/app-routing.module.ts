import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { AttendancePageComponent } from './pages/clinic/attendance-page/attendance-page.component';
import { CostumersPageComponent } from './pages/clinic/costumers-page/costumers-page.component';
import { ProductsPageComponent } from './pages/clinic/products-page/products-page.component';
import { ServiceCategoriesPageComponent } from './pages/clinic/service-categories-page/service-categories-page.component';
import { ServicesPageComponent } from './pages/clinic/services-page/services-page.component';
import { FramePageComponent } from './pages/master/frame.page';


const routes: Routes = [
    {
        path: '',
        component: FramePageComponent,
       
    },
    {
        path: 'clinic',
        component: FramePageComponent,
        children:[
            {path:'products',component:ProductsPageComponent},
            {path:'services',component:ServicesPageComponent},
            {path:'service-categories',component:ServiceCategoriesPageComponent},
            {path:'attendance',component:AttendancePageComponent},
            {path:'costumers',component:CostumersPageComponent}
        ]
    },
    {path: 'login',component: LoginPageComponent},
    {path: 'signup',component: SignupPageComponent},
    {path: 'reset-password',component: ResetPasswordPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}