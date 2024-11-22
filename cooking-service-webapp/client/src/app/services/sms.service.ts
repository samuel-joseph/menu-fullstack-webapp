import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor() { }

  generateSmsLink(phoneNumber: string, items: any[]): string {
    // Calculate the total price of items
    const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    
    // Format the message body
    let message = `Checkout details:\n`;
    items.forEach(item => {
      message += `${item.quantity} x ${item.name} - $${item.price}\n`;
    });
    message += `Total: $${total}\n`;
    message += `Thank you for your order!`;

    // Create the SMS link with the phone number and prepopulated message
    return `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  }
}
