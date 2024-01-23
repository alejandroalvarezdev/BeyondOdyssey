import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorama',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memorama.component.html',
  styleUrl: './memorama.component.css',
})
export class MemoramaComponent implements OnInit {
  cards: string[] = [
    '../../../assets/Iconos/Ecosistema Beyond/AROMA.png',
    '../../../assets/Iconos/Ecosistema Beyond/AROMA_ACUA.png',
    '../../../assets/Iconos/Ecosistema Beyond/cafe_explicacion.jpg',
    '../../../assets/Iconos/Ecosistema Beyond/AROMA_BLANCO.png',
    'E',
    'F',
    'G',
    'H',
    '../../../assets/Iconos/Ecosistema Beyond/AROMA.png',
    '../../../assets/Iconos/Ecosistema Beyond/AROMA_ACUA.png',
    '../../../assets/Iconos/Ecosistema Beyond/cafe_explicacion.jpg',
    '../../../assets/Iconos/Ecosistema Beyond/AROMA_BLANCO.png',
    'E',
    'F',
    'G',
    'H',
  ];

  cardsB: Array<any> = [
    { scr: '../../../assets/Iconos/Ecosistema Beyond/AROMA.png' },
    { scr: '../../../assets/Iconos/Ecosistema Beyond/AROMA.png' },
    { scr: '../../../assets/Iconos/Ecosistema Beyond/AROMA_ACUA.png' },
    { scr: '../../../assets/Iconos/Ecosistema Beyond/cafe_explicacion.jpg' },
    { scr: '../../../assets/Iconos/Ecosistema Beyond/AROMA_ACUA.png' },
    { scr: '../../../assets/Iconos/Ecosistema Beyond/cafe_explicacion.jpg' },
  ];
  shuffledCards: Array<any> = [];
  flippedCards: string[] = [];
  matchedPairs: string[] = [];

  ngOnInit(): void {
    this.shuffleCards();
  }

  shuffleCards() {
    // Shuffle the cards using Fisher-Yates algorithm
    this.shuffledCards = [...this.cards];
    for (let i = this.shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledCards[i], this.shuffledCards[j]] = [
        this.shuffledCards[j],
        this.shuffledCards[i],
      ];
    }
  }

  flipCard(index: number) {
    if (
      this.flippedCards.length < 2 &&
      !this.flippedCards.includes(index.toString())
    ) {
      this.flippedCards.push(index.toString());

      if (this.flippedCards.length === 2) {
        setTimeout(() => this.checkMatch(), 1000);
      }
    }
  }

  checkMatch() {
    const [index1, index2] = this.flippedCards;
    if (
      this.shuffledCards[parseInt(index1)] ===
      this.shuffledCards[parseInt(index2)]
    ) {
      this.matchedPairs.push(this.shuffledCards[parseInt(index1)]);
    }

    this.flippedCards = [];

    if (this.matchedPairs.length === this.cards.length / 2) {
      alert('¡Felicidades! Has ganado el juego.');
    }
  }
}
