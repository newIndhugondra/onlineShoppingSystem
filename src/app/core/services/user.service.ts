import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

  private baseUrl = 'http://localhost:9090/users';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get(`${this.baseUrl}/me`);
  }

  addAddress(address: any) {
    return this.http.post(`${this.baseUrl}/me/address`, address);
  }

  addToWishlist(productId: string) {
    return this.http.post(`${this.baseUrl}/me/wishlist/${productId}`, {});
  }
}
