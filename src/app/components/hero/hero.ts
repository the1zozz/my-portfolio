import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  private interval?: ReturnType<typeof setInterval>;
  cursorVisible = true;

  constructor(public portfolio: PortfolioService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
