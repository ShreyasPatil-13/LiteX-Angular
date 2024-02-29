import { Component } from '@angular/core';
import { HomeBlocksComponent } from '../home-blocks/home-blocks.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HomeBlocksComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
