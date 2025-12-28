import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
})
export class PlaceOrderComponent {

  message = '';

  constructor(private orderService: OrderService) {}

  placeOrder() {
    const order = {
      userId: 1,
      totalAmount: 2500
    };

    this.orderService.placeOrder(order).subscribe(res => {
      this.message = `Order successful! ID: ${res.orderId}`;
    });
  }
}
