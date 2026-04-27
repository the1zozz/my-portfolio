import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  showAll = signal(false);
  expandedCards = signal<Set<string>>(new Set());

  constructor(public portfolio: PortfolioService) {}

  get displayed(): Project[] {
    return this.showAll()
      ? this.portfolio.projects
      : this.portfolio.projects.filter(p => p.featured);
  }

  toggle() { this.showAll.update(v => !v); }

  isExpanded(title: string): boolean {
    return this.expandedCards().has(title);
  }

  toggleCard(title: string) {
    this.expandedCards.update(set => {
      const next = new Set(set);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  }
}
