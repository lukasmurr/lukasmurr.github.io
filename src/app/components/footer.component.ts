import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Lukas Murr</h3>
            <p>Web Developer | DevOps Engineer | Game Developer</p>
          </div>
          
          <div class="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="https://github.com/lukasmurr" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:contact@example.com">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Tech Stack</h4>
            <ul>
              <li>Angular 21</li>
              <li>TypeScript</li>
              <li>PWA</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Lukas Murr. Built with Angular 21 & ❤️</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: rgba(15, 23, 42, 0.95);
      border-top: 1px solid rgba(100, 116, 139, 0.3);
      padding: 3rem 0 1.5rem;
      margin-top: auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      color: #60a5fa;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    .footer-section h4 {
      color: #94a3b8;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .footer-section p {
      color: #cbd5e1;
      line-height: 1.6;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
      color: #cbd5e1;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #60a5fa;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(100, 116, 139, 0.3);
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
