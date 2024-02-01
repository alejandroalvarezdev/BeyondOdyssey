import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Food} from "../food";
import {Snake} from "../snake";
import {outsideGrid} from "../gameboard-grid.util";
import { CommonModule } from '@angular/common';
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-snakeboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snakeboard.component.html',
  styleUrl: './snakeboard.component.css'
})
export class SnakeboardComponent {
  title = 'snakeGame1938web';
  gameBoard: any;
  snake = new Snake();
  food = new Food(this.snake);
  nivel:any;
  nextLevel:number =0;

constructor(private router:Router, private route:ActivatedRoute){}

  lastRenderTime = 0
  gameOver = false

  ngAfterViewInit() {
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }

  ngOnInit(): void {
    this.nivel = this.route.snapshot.paramMap.get('id');
    console.warn("SnakeID level", this.nivel);
    this.nextLevel = parseInt(this.nivel) + 1;
    
    this.snake.listenToInputs();
  }
  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }


  start(currentTime: any) {
    if (this.gameOver) {
      this.router.navigate(['memorama',this.nextLevel]);
      
      
      return console.warn("Game over");
      
    }

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / this.snakeSpeed) {
      return;
    }
    this.lastRenderTime = currentTime;

    this.update();
    this.draw();
  }

  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }

  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if (!this.gameOver) {
      return;
    }
    this.gameBoard.classList.add('blur');
  }


  get snakeSpeed() {
    const score = this.food.currentScore;
    if (score < 10) {
      return 4;
    }
    if (score > 10 && score < 15) {
      return 5;
    }
    if (score > 15 && score < 20) {
      return 6;
    }
    return 7;
  }

}
