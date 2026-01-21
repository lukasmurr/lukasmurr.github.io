import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <a routerLink="/" class="logo">
            <span class="logo-text">LM</span>
          </a>
          
          <button 
            class="mobile-menu-toggle" 
            (click)="toggleMobileMenu()"
            [attr.aria-label]="mobileMenuOpen() ? 'Menü schließen' : 'Menü öffnen'"
          >
            @if (mobileMenuOpen()) {
              <span class="icon">✕</span>
            } @else {
              <span class="icon">☰</span>
            }
          </button>

          <nav class="nav" [class.mobile-open]="mobileMenuOpen()">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" 
               (click)="closeMobileMenu()">Home</a>
            <a routerLink="/webdev" routerLinkActive="active" (click)="closeMobileMenu()">Web Development</a>
            <a routerLink="/devops" routerLinkActive="active" (click)="closeMobileMenu()">DevOps</a>
            <a routerLink="/gaming" routerLinkActive="active" (click)="closeMobileMenu()">Gaming</a>
            <a href="https://github.com/lukasmurr" target="_blank" rel="noopener noreferrer" 
               class="github-link" (click)="closeMobileMenu()">
              <span class="icon">⚡</span> GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(100, 116, 139, 0.3);
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .logo {
      font-size: 1.75rem;
      font-weight: 700;
      color: #60a5fa;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .logo-text {
      display: inline-block;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo:hover .logo-text {
      transform: scale(1.05);
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
    }

    .nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav a {
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
      padding: 0.5rem 0;
    }

    .nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #60a5fa, #a78bfa);
      transition: width 0.3s ease;
    }

    .nav a:hover,
    .nav a.active {
      color: #60a5fa;
    }

    .nav a:hover::after,
    .nav a.active::after {
      width: 100%;
    }

    .github-link .icon {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .mobile-menu-toggle {
        display: block;
      }

      .nav {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(15, 23, 42, 0.98);
        flex-direction: column;
        gap: 0;
        padding: 1rem 0;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        border-bottom: 1px solid rgba(100, 116, 139, 0.3);
      }

      .nav.mobile-open {
        transform: translateX(0);
      }

      .nav a {
        width: 100%;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid rgba(100, 116, 139, 0.2);
      }

      .nav a::after {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  protected mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
