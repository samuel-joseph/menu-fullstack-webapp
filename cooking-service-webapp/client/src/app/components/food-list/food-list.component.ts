import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
})
export class FoodListComponent implements OnInit {
  foods: any[] = [];

  constructor(private foodService: FoodService, private cartService: CartService) {}

  async ngOnInit() {
    this.foods = await this.foodService.getFoods();
  }

  addToCart(food: any) {
    this.cartService.addToCart(food);
  }
}
