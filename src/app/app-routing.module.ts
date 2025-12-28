import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   // your routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guard';
// const routes: Routes = [

//   // 👉 DEFAULT PAGE (change this to whichever order page you want)
//   { path: '', redirectTo: 'order', pathMatch: 'full' },

//   {
//     path: 'auth',
//     loadChildren: () =>
//       import('./auth/auth.module').then(m => m.AuthModule)
//   },

//   {
//     path: 'user',
//     canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./user/user.module').then(m => m.UserModule)
//   },

//   {
//     path: 'order',
//     loadChildren: () =>
//       import('./order/order.module').then(m => m.OrderModule)
//   },

//   // fallback
//   { path: '**', redirectTo: 'order' }
// ];





// // const routes: Routes = [

// //   { path: '', redirectTo: 'auth/register', pathMatch: 'full' }
// // ,

// //   // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

// //   {
// //   path: 'user',
// //   loadChildren: () =>
// //     import('./user/user.module').then(m => m.UserModule)
// // }
// // ,

// //   {
// //     path: 'auth',
// //     loadChildren: () =>
// //       import('./auth/auth.module').then(m => m.AuthModule)
// //   },

  
// //    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

// //   {
// //     path: 'auth',
// //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
// //   },

// //   {
// //     path: 'user',
// //     canActivate: [AuthGuard],
// //     loadChildren: () => import('./user/user.module').then(m => m.UserModule)
// //   },

// //   { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },

// //   // optional fallback
// //   { path: '**', redirectTo: 'auth/login' }
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule {}
