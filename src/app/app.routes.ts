import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SellerMyproductComponent } from './seller/seller-myproduct/seller-myproduct.component';
import { SellerAddProductComponent } from './seller/seller-add-product/seller-add-product.component';
import { SellerProductDetailComponent } from './seller/seller-product-detail/seller-product-detail.component';

export const routes: Routes = [
    {
      component:HomeComponent,
      path:''
    },
    {
        component:LoginComponent,
        path:'login'
    },
    {
        component:CartComponent,
        path:'cart'
    },
    {
        component:SellerHomeComponent,
        path:'sellerHome',
        canActivate:[authGuard]
    },
    {
        component:SellerDashboardComponent,
        path:'sellerDashboard',
    },
    {
        component:SellerMyproductComponent,
        path:'sellerMyproduct',
    },
    {
        component:SellerAddProductComponent,
        path:'sellerAddProduct',
    },
    {
        component:SellerProductDetailComponent,
        path:'sellerProductDetail/:id',
    }    
];
