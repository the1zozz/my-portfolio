import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p class="font-mono">
        Designed &amp; Built by <span class="accent">Moaaz Atef</span>
        &nbsp;·&nbsp; Angular
      </p>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 2rem 1.5rem;
      text-align: center;
      border-top: 1px solid var(--border);
      p { font-size: .75rem; color: var(--text-dim); }
      .accent { color: var(--accent); }
    }
  `]
})
export class FooterComponent {}
