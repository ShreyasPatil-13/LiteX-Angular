import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HomeBlocksComponent } from '../home-blocks/home-blocks.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HomeBlocksComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
