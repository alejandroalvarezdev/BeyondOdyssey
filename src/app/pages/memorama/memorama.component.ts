import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

interface Card {
  id: number;
  image: string;
  level:number;
}
@Component({
  selector: 'app-memorama',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memorama.component.html',
  styleUrl: './memorama.component.css',
})
export class MemoramaComponent implements OnInit {

  cards: Card[] = [
// Level 1 Cards 
    { id: 1, image: '../../../assets/Iconos/nivel1PeoplePlus/BOSS.png',level:1 },
    { id: 1, image: '../../../assets/Iconos/nivel1PeoplePlus/BOSS.png',level:1 },
    { id: 2, image: '../../../assets/Iconos/nivel1PeoplePlus/CFR.png',level:1 },
    { id: 2, image: '../../../assets/Iconos/nivel1PeoplePlus/CFR.png',level:1 },
    // { id: 3, image: '../../../assets/Iconos/nivel1PeoplePlus/peoplePlus.png',level:1 },
    // { id: 3, image: '../../../assets/Iconos/nivel1PeoplePlus/peoplePlus.png',level:1 },
//level2 Cards
    // { id: 4, image: '../../../assets/Iconos/nivel2Ecosystem/Customers.png',level:2 },
    // { id: 4, image: '../../../assets/Iconos/nivel2Ecosystem/Customers.png',level:2 },
    // { id: 5, image: '../../../assets/Iconos/nivel2Ecosystem/Ecosystem.png',level:2 },
    // { id: 5, image: '../../../assets/Iconos/nivel2Ecosystem/Ecosystem.png',level:2 },
    // { id: 6, image: '../../../assets/Iconos/nivel2Ecosystem/Employees.png',level:2 },
    // { id: 6, image: '../../../assets/Iconos/nivel2Ecosystem/Employees.png',level:2 },
    // { id: 7, image: '../../../assets/Iconos/nivel2Ecosystem/Partners.png',level:2 },
    // { id: 7, image: '../../../assets/Iconos/nivel2Ecosystem/Partners.png',level:2 },
    // { id: 8, image: '../../../assets/Iconos/nivel2Ecosystem/Society.png',level:2 },
    // { id: 8, image: '../../../assets/Iconos/nivel2Ecosystem/Society.png',level:2 },
    // { id: 9, image: '../../../assets/Iconos/nivel2Ecosystem/Stockholders.png',level:2 },
    // { id: 9, image: '../../../assets/Iconos/nivel2Ecosystem/Stockholders.png',level:2 },    
//level3 
    // { id: 10, image: '../../../assets/Iconos/nivel3Profile/ActiveListening.png',level:3 },
    // { id: 10, image: '../../../assets/Iconos/nivel3Profile/ActiveListening.png',level:3 },
    // { id: 11, image: '../../../assets/Iconos/nivel3Profile/Decision_Making.png',level:3 },
    // { id: 11, image: '../../../assets/Iconos/nivel3Profile/Decision_Making.png',level:3 },
    // { id: 12, image: '../../../assets/Iconos/nivel3Profile/Embrace_the_ecosystem.png',level:3 },
    // { id: 12, image: '../../../assets/Iconos/nivel3Profile/Embrace_the_ecosystem.png',level:3 },
    // { id: 13, image: '../../../assets/Iconos/nivel3Profile/Innovation.png/',level:3 },
    // { id: 13, image: '../../../assets/Iconos/nivel3Profile/Innovation.png/',level:3 },
    // { id: 14, image: '../../../assets/Iconos/nivel3Profile/Risk_taker.png',level:3 },
    // { id: 14, image: '../../../assets/Iconos/nivel3Profile/Risk_taker.png',level:3 },
    // { id: 15, image: '../../../assets/Iconos/nivel3Profile/Self_taught.png',level:3 },
    // { id: 15, image: '../../../assets/Iconos/nivel3Profile/Self_taught.png',level:3 },
    // { id: 16, image: '../../../assets/Iconos/nivel3Profile/Service_oriented.png',level:3},
    // { id: 16, image: '../../../assets/Iconos/nivel3Profile/Service_oriented.png',level:3},
    // { id: 17, image: '../../../assets/Iconos/nivel3Profile/Work_w_Excellence.png',level:3 },
    // { id: 17, image: '../../../assets/Iconos/nivel3Profile/Work_w_Excellence.png',level:3 },
    // { id: 18, image: '../../../assets/Iconos/nivel3Profile/Proactive.png',level:3 },
    // { id: 18, image: '../../../assets/Iconos/nivel3Profile/Proactive.png',level:3 },
    // { id: 19, image: '../../../assets/Iconos/nivel3Profile/Self_taught.png',level:3 },   
    // { id: 19, image: '../../../assets/Iconos/nivel3Profile/Self_taught.png',level:3 },
    
    
    
  
    // Add more cards as needed
  ];

  shuffledCards: Card[] = [];
  flippedCards: Card[] = [];
  matchedPairs: Card[] = [];
  constructor(private router:Router){}
  ngOnInit(): void {
    // this.cards = this.cards.concat(this.cards); // Duplicate the cards to make pairs
    this.shuffleCards();
  }

  shuffleCards() {
    // Shuffle the cards using Fisher-Yates algorithm
    this.shuffledCards = [...this.cards];
    for (let i = this.shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledCards[i], this.shuffledCards[j]] = [this.shuffledCards[j], this.shuffledCards[i]];
    }
  }

  flipCard(card: Card) {
    if (this.flippedCards.length < 2 && !this.flippedCards.includes(card)) {
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(() => this.checkMatch(), 1000);
      }
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;
    if (card1.id === card2.id) {
      this.matchedPairs.push(card1, card2);
    }

    this.flippedCards = [];

    if (this.matchedPairs.length === this.cards.length) {
      alert('¡Felicidades! Has ganado el juego.');
      this.router.navigate(['snake']);
    }
  }
}




  

