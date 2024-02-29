import { Component } from '@angular/core';

@Component({
  selector: 'app-home-blocks',
  standalone: true,
  imports: [],
  templateUrl: './home-blocks.component.html',
  styleUrl: './home-blocks.component.css'
})
export class HomeBlocksComponent {

  shoeCategories = [
    { category: 'Sneakers', image: '../../../assets/img/shoes/sneakers-01.jpeg' },
    { category: 'Casual', image: '../../../assets/img/shoes/casual.jpg' },
    { category: 'Athletic', image: '../../../assets/img/shoes/sports-01.jpg' },
    { category: 'Formal', image: '../../../assets/img/shoes/formal.jpg' },
    // Add more categories as needed
  ];


  shoeBrands = [
    { name: 'Nike', image: '../../../assets/svgs/nike-logo.svg' },
    { name: 'Adidas', image: '../../../assets/svgs/adidas-logo.svg' },
    { name: 'Puma', image: '../../../assets/svgs/puma-logo.svg' },
    { name: 'Reebok', image: '../../../assets/svgs/reebok-logo.svg' },
    { name: 'Bata', image: '../../../assets/svgs/bata-logo.svg' },
    { name: 'Fila', image: '../../../assets/svgs/fila-logo.svg' },
    // Add more brands as needed
  ];



}
