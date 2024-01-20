import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-memorama',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memorama.component.html',
  styleUrl: './memorama.component.css'
})
export class MemoramaComponent {
cards:Array<any> = [1,2,3,4,5,6,];
}
