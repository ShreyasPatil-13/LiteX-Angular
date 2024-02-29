import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor() {
    this.calulateTotalAmount();
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.cartShoeItems.length) {
      // Use splice to remove the item at the specified index
      this.cartShoeItems.splice(index, 1);
    }
    this.calulateTotalAmount();
  }

  totalAmount = 0;
  shippingAmount = 0;
  subTotal = 0;

  calulateTotalAmount = () => {
    this.totalAmount = this.cartShoeItems.reduce((total, item) => total + item.price, 0);
    if (this.cartShoeItems.length > 0) {
      this.shippingAmount = 120;
    } else {
      this.shippingAmount = 0;
    }
    this.subTotal = this.totalAmount + this.shippingAmount;
  }


  cartShoeItems = [
    {
      id: 1,
      productName: 'Premium Running Shoes',
      category: 'Athletic',
      brandName: 'Nike',
      price: 4599,
      description: 'Experience unparalleled comfort and performance with our Premium Running Shoes. Engineered with advanced cushioning technology and excellent arch support, these shoes are designed to enhance your running experience. The breathable and lightweight design ensures that your feet stay cool and comfortable, mile after mile. Whether you\'re a seasoned runner or just starting your fitness journey, these shoes will take your runs to the next level.',
      image: '../../../assets/img/shoes/running-shoes.jpg'
    },
    {
      id: 2,
      productName: 'Street-Style Casual Sneakers',
      category: 'Casual',
      brandName: 'Adidas',
      price: 1299,
      description: 'Step into style with our Street-Style Casual Sneakers by Adidas. These sneakers blend fashion and functionality, offering a modern and versatile look for your everyday adventures. The durable construction and cushioned insole provide all-day comfort, while the iconic three stripes add a touch of classic Adidas flair. Perfect for casual outings or street-style statements, these sneakers will complement your wardrobe with a trendy edge.',
      image: '../../../assets/img/shoes/casual-sneakers.jpg'
    },
    {
      id: 3,
      productName: 'Pro Series Basketball Shoes',
      category: 'Athletic',
      brandName: 'Jordan',
      price: 2399,
      description: 'Elevate your game with the Pro Series Basketball Shoes from Jordan. Designed for the serious baller, these high-top basketball shoes deliver optimal performance on the court. The responsive cushioning and ankle support provide stability during quick movements, while the stylish design sets you apart from the competition. Whether you\'re a streetball enthusiast or a professional player, these shoes are crafted to meet the demands of the game.',
      image: '../../../assets/img/shoes/basketball-shoes.jpg'
    },
    {
      id: 4,
      productName: 'Classic Formal Loafers',
      category: 'Formal',
      brandName: 'Cole Haan',
      price: 1799,
      description: 'Make a sophisticated statement with our Classic Formal Loafers from Cole Haan. Crafted with premium materials and meticulous attention to detail, these loafers are perfect for formal occasions. The timeless design and comfortable fit ensure that you not only look sharp but also feel confident. Elevate your formal attire with these versatile loafers that seamlessly blend style and comfort.',
      image: '../../../assets/img/shoes/formal-loafers.jpg'
    },
    {
      id: 5,
      productName: 'All-Terrain Hiking Boots',
      category: 'Outdoor',
      brandName: 'Merrell',
      price: 1599,
      description: 'Conquer any trail with our All-Terrain Hiking Boots from Merrell. Built for outdoor enthusiasts, these boots combine durability, support, and waterproof technology to ensure a comfortable hiking experience. The rugged outsole provides excellent traction on various surfaces, while the waterproof membrane keeps your feet dry in challenging conditions. Whether you\'re trekking through mountains or exploring local trails, these boots are your go-to companions.',
      image: '../../../assets/img/shoes/hiking-boots.jpg'
    },
  ];

}
