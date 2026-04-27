import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  constructor(public portfolio: PortfolioService) {}

  capabilities = [
    { icon: '⚙️', label: 'Microservices Architecture' },
    { icon: '🔐', label: 'Security & Auth (JWT, OAuth2)' },
    { icon: '🗄️', label: 'Database Design & Optimization' },
    { icon: '🚀', label: 'CI/CD & Docker Deployment' },
    { icon: '🤖', label: 'AI-Powered Platform Development' },
    { icon: '📱', label: 'Responsive SPA Development' }
  ];
}
