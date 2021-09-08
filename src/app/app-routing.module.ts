import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';
import { DeletedProductListComponent } from './pages/deleted-product-list/deleted-product-list.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'Product List',
    },
    children: [
      {
        path: 'list',
        component: ProductListComponent,
        data: {
          breadcrumb: 'Product List',
          title: 'Product List'
        },
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
        data: {
          breadcrumb: 'Product Detail',
          title: 'Product Detail'
        },
      },
      {
        path: 'delete',
        component: DeletedProductListComponent,
        data: {
          breadcrumb: 'Deleted Product List',
          title: 'Deleted Product List'
        },
      },
      {
        path: 'add',
        component: AddEditProductComponent,
        data: {
          breadcrumb: 'Add Product',
          title: 'Add Product'
        },
      },
      {
        path: 'edit/:id',
        component: AddEditProductComponent,
        data: {
          breadcrumb: 'Edit Product Details',
          title: 'Edit Product Detials'
        },
      },
    ]
  }
  // { path: 'welcome', component: WelcomeComponent },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
