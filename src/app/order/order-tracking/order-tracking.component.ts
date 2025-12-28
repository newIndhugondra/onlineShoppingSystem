import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
})
export class OrderTrackingComponent {
  orderId!: number;
  order:any;

  constructor(private orderService: OrderService) {}

  track() {
    this.orderService.getOrder(this.orderId).subscribe(res => {
      this.order = res;
    });
  }
}
