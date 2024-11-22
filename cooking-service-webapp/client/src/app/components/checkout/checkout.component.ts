import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

import { SmsService } from '../../services/sms.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  userPhoneNumber: string = '+16468244632';

  constructor(private cartService: CartService, private smsService: SmsService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

  proceedToCheckout() {
    // Generate the SMS link with prepopulated message
    const smsLink = this.smsService.generateSmsLink(this.userPhoneNumber, this.cartItems);

    // Redirect to the SMS app
    window.location.href = smsLink;
  }
}
