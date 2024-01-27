import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bird',
  standalone: true,
  imports: [],
  templateUrl: './bird.component.html',
  styleUrl: './bird.component.css'
})
export class BirdComponent {
  @Input() bottom: number = 50; // Posición inicial del pájaro
}
