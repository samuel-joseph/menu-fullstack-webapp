import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(food: any) {
    const currentCart = this.cart.value;
    const existingItem = currentCart.find(item => item.id === food.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentCart.push({ ...food, quantity: 1 });
    }
    this.cart.next(currentCart);
  }

  clearCart() {
    this.cart.next([]);
  }
}
