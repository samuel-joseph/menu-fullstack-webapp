import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = 'http://localhost:3000/api/foods';

  async getFoods() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }
}
