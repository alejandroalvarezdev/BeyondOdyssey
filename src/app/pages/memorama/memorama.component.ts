import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

interface Card {
  id: number;
  image: string;
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
    { id: 1, image: '../../../assets/Iconos/Ecosistema Beyond/AROMA_ACUA.png' },
    { id: 1, image: '../../../assets/Iconos/Ecosistema Beyond/AROMA_ACUA.png' },
    { id: 2, image: '../../../assets/Iconos/Ecosistema Beyond/AROMA.png' },
    { id: 2, image: '../../../assets/Iconos/Ecosistema Beyond/AROMA.png' },
    { id: 3, image: '../../../assets/Iconos/Ecosistema Beyond/CAFE_VERDE.png' },
    { id: 3, image: '../../../assets/Iconos/Ecosistema Beyond/CAFE_VERDE.png' },
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
      this.router.navigate(['flappy']);
    }
  }
}




  

