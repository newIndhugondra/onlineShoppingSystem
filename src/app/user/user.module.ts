import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,ReactiveFormsModule
  ]
})
export class UserModule {}

export interface Address {
  street: string;
  city: string;
  state?: string;
  pincode?: string;
}

export interface User {
  email: string;
  phone: string;
  addresses: Address[];
  wishlist: string[];
}
