import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  shoeItems = [
    {
      id: 1,
      productName: 'Premium Running Shoes',
      category: 'Athletic',
      brandName: 'Nike',
      price: 89.99,
      description: 'Experience unparalleled comfort and performance with our Premium Running Shoes. Engineered with advanced cushioning technology and excellent arch support, these shoes are designed to enhance your running experience. The breathable and lightweight design ensures that your feet stay cool and comfortable, mile after mile. Whether you\'re a seasoned runner or just starting your fitness journey, these shoes will take your runs to the next level.',
      image: 'running-shoes.jpg'
    },
    {
      id: 2,
      productName: 'Street-Style Casual Sneakers',
      category: 'Casual',
      brandName: 'Adidas',
      price: 49.99,
      description: 'Step into style with our Street-Style Casual Sneakers by Adidas. These sneakers blend fashion and functionality, offering a modern and versatile look for your everyday adventures. The durable construction and cushioned insole provide all-day comfort, while the iconic three stripes add a touch of classic Adidas flair. Perfect for casual outings or street-style statements, these sneakers will complement your wardrobe with a trendy edge.',
      image: 'casual-sneakers.jpg'
    },
    {
      id: 3,
      productName: 'Pro Series Basketball Shoes',
      category: 'Athletic',
      brandName: 'Jordan',
      price: 109.99,
      description: 'Elevate your game with the Pro Series Basketball Shoes from Jordan. Designed for the serious baller, these high-top basketball shoes deliver optimal performance on the court. The responsive cushioning and ankle support provide stability during quick movements, while the stylish design sets you apart from the competition. Whether you\'re a streetball enthusiast or a professional player, these shoes are crafted to meet the demands of the game.',
      image: 'basketball-shoes.jpg'
    },
    {
      id: 4,
      productName: 'Classic Formal Loafers',
      category: 'Formal',
      brandName: 'Cole Haan',
      price: 79.99,
      description: 'Make a sophisticated statement with our Classic Formal Loafers from Cole Haan. Crafted with premium materials and meticulous attention to detail, these loafers are perfect for formal occasions. The timeless design and comfortable fit ensure that you not only look sharp but also feel confident. Elevate your formal attire with these versatile loafers that seamlessly blend style and comfort.',
      image: 'formal-loafers.jpg'
    },
    {
      id: 5,
      productName: 'All-Terrain Hiking Boots',
      category: 'Outdoor',
      brandName: 'Merrell',
      price: 129.99,
      description: 'Conquer any trail with our All-Terrain Hiking Boots from Merrell. Built for outdoor enthusiasts, these boots combine durability, support, and waterproof technology to ensure a comfortable hiking experience. The rugged outsole provides excellent traction on various surfaces, while the waterproof membrane keeps your feet dry in challenging conditions. Whether you\'re trekking through mountains or exploring local trails, these boots are your go-to companions.',
      image: 'hiking-boots.jpg'
    },
    {
      id: 6,
      productName: 'Comfort Fusion Flip Flops',
      category: 'Casual',
      brandName: 'Havaianas',
      price: 19.99,
      description: 'Step into relaxation with our Comfort Fusion Flip Flops by Havaianas. These lightweight and comfortable flip flops are perfect for casual wear and beach outings. The soft and cushioned footbed provides support, while the flexible rubber sole ensures easy movement. With a stylish design and the iconic Havaianas logo, these flip flops add a touch of Brazilian flair to your laid-back style.',
      image: 'flip-flops.jpg'
    },
    {
      id: 7,
      productName: 'Elegant Oxford Dress Shoes',
      category: 'Formal',
      brandName: 'Clarks',
      price: 99.99,
      description: 'Step into sophistication with our Elegant Oxford Dress Shoes from Clarks. Meticulously crafted with premium leather, these oxford shoes exude timeless elegance. The classic design and meticulous stitching make them the perfect choice for formal events, business meetings, or special occasions. Elevate your formal look with these distinguished oxfords that combine style and comfort seamlessly.',
      image: 'oxford-shoes.jpg'
    },
    {
      id: 8,
      productName: 'Skateboard Pro Sneakers',
      category: 'Casual',
      brandName: 'Vans',
      price: 59.99,
      description: 'Ride in style with our Skateboard Pro Sneakers from Vans. Designed for skateboard enthusiasts, these sneakers offer durability, grip, and a cool aesthetic. The reinforced toe caps and padded collars provide extra support during skate sessions, while the iconic Vans Off The Wall logo adds a touch of street-style authenticity. Whether you\'re shredding the streets or just embracing a casual look, these sneakers are a must-have for skateboarders.',
      image: 'skateboard-sneakers.jpg'
    },
    {
      id: 9,
      productName: 'Classic Leather Boots',
      category: 'Casual',
      brandName: 'Timberland',
      price: 129.99,
      description: 'Embrace rugged style with our Classic Leather Boots from Timberland. Built to withstand the elements, these boots feature premium leather, durable construction, and a waterproof membrane. Whether you\'re exploring the great outdoors or navigating city streets, these boots provide comfort and durability. The classic Timberland design ensures a timeless and versatile addition to your footwear collection.',
      image: 'leather-boots.jpg'
    },
    {
      id: 10,
      productName: 'Performance Athletic Sandals',
      category: 'Athletic',
      brandName: 'Teva',
      price: 39.99,
      description: 'Maximize your comfort with our Performance Athletic Sandals from Teva. Engineered for outdoor activities, these sandals feature adjustable straps, contoured footbeds, and durable rubber outsoles. The lightweight design and water-friendly materials make them perfect for hiking, water sports, or casual outdoor adventures. Stay active and comfortable with these versatile athletic sandals that combine performance and style.',
      image: 'athletic-sandals.jpg'
    },
    // Add more items as needed
  ];


  selectedShoe: any = {};
  selectShoes(val: any) {
    this.selectedShoe = this.shoeItems[val];
  }

  close() {
    this.selectedShoe = {}
  }


}
