import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nivel:number = 1;
  constructor(private router:Router){}
startGame(){
  this.router.navigate(['memorama',1]);
}
}
