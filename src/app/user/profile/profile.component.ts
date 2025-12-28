import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user: any;
  loading = true;
  showAddressForm = false;

  addressForm = this.fb.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: [''],
    pincode: ['']
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.userService.getProfile().subscribe({
      next: (res: any) => {
        this.user = res.data;
        this.loading = false;
      }
    });
  }

  addAddress() {
    if (this.addressForm.invalid) return;

    this.userService.addAddress(this.addressForm.value).subscribe(() => {
      this.addressForm.reset();
      this.showAddressForm = false;
      this.loadProfile();
    });
  }

  addToWishlist(productId: string) {
    this.userService.addToWishlist(productId).subscribe(() => {
      this.loadProfile();
    });
  }
}
