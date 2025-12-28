import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
})
export class MyOrdersComponent implements OnInit {

  orders:any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrdersByUser(1).subscribe(res => {
      this.orders = res;
    });
  }

  cancel(orderId:number) {
    this.orderService.cancelOrder(orderId).subscribe(() => {
      this.loadOrders();
    });
  }
}
