import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { ProjectCardComponent } from '../components/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="gradient-text">Hallo! Ich bin Lukas Murr</span>
            </h1>
            <p class="hero-subtitle">
              Full-Stack Developer | DevOps Engineer | Game Developer
            </p>
            <p class="hero-description">
              Leidenschaft für moderne Webtechnologien, Cloud-Infrastruktur und 
              interaktive Gaming-Erlebnisse. Spezialisiert auf Angular, DevOps-Praktiken 
              und Game Development.
            </p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">Projekte ansehen</a>
              <a href="https://github.com/lukasmurr" target="_blank" rel="noopener noreferrer" 
                 class="btn btn-secondary">
                GitHub Profil
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills">
        <div class="container">
          <h2 class="section-title">Technologien & Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <div class="skill-icon">💻</div>
              <h3>Web Development</h3>
              <ul>
                <li>Angular 21 / Signals</li>
                <li>TypeScript / JavaScript</li>
                <li>HTML5 / CSS3 / SCSS</li>
                <li>Progressive Web Apps</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div class="skill-category">
              <div class="skill-icon">⚙️</div>
              <h3>DevOps</h3>
              <ul>
                <li>Docker / Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>GitHub Actions</li>
                <li>Terraform / IaC</li>
                <li>Cloud (AWS/Azure)</li>
              </ul>
            </div>

            <div class="skill-category">
              <div class="skill-icon">🎮</div>
              <h3>Game Development</h3>
              <ul>
                <li>Unity / C#</li>
                <li>Game Physics</li>
                <li>3D Modeling</li>
                <li>Game Design</li>
                <li>Procedural Generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section id="projects" class="projects">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid">
            @for (project of featuredProjects(); track project.id) {
              <app-project-card [project]="project" />
            }
          </div>
          
          <div class="view-more">
            <h3>Mehr Projekte entdecken</h3>
            <div class="category-links">
              <a routerLink="/webdev" class="category-card">
                <span class="icon">💻</span>
                <span>Web Development</span>
              </a>
              <a routerLink="/devops" class="category-card">
                <span class="icon">⚙️</span>
                <span>DevOps</span>
              </a>
              <a routerLink="/gaming" class="category-card">
                <span class="icon">🎮</span>
                <span>Gaming</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="about">
        <div class="container">
          <h2 class="section-title">Über mich</h2>
          <div class="about-content">
            <p>
              Ich bin ein leidenschaftlicher Entwickler mit Fokus auf moderne Webtechnologien, 
              Cloud-Infrastruktur und Game Development. Mein Ziel ist es, innovative und 
              benutzerfreundliche Lösungen zu schaffen, die sowohl technisch anspruchsvoll 
              als auch visuell ansprechend sind.
            </p>
            <p>
              Mit mehrjähriger Erfahrung in der Softwareentwicklung habe ich an verschiedenen 
              Projekten gearbeitet - von Enterprise-Web-Anwendungen über Cloud-Infrastrukturen 
              bis hin zu Indie-Games. Ich liebe es, neue Technologien zu lernen und mein 
              Wissen mit anderen zu teilen.
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Hero Section */
    .hero {
      padding: 4rem 0;
      min-height: 600px;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9));
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.1) 0%, transparent 50%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .gradient-text {
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: #94a3b8;
      margin-bottom: 1.5rem;
    }

    .hero-description {
      font-size: 1.125rem;
      color: #cbd5e1;
      line-height: 1.8;
      max-width: 700px;
      margin-bottom: 2rem;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 0.875rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(96, 165, 250, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: #60a5fa;
      border: 2px solid #60a5fa;
    }

    .btn-secondary:hover {
      background: rgba(96, 165, 250, 0.1);
      transform: translateY(-2px);
    }

    /* Sections */
    section {
      padding: 5rem 0;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Skills */
    .skills {
      background: rgba(15, 23, 42, 0.5);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .skill-category {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(100, 116, 139, 0.3);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .skill-category:hover {
      transform: translateY(-5px);
      border-color: rgba(96, 165, 250, 0.5);
      box-shadow: 0 10px 30px rgba(96, 165, 250, 0.2);
    }

    .skill-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .skill-category h3 {
      color: #e2e8f0;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .skill-category ul {
      list-style: none;
      padding: 0;
      color: #cbd5e1;
    }

    .skill-category ul li {
      padding: 0.5rem 0;
    }

    /* Projects */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .view-more {
      text-align: center;
      margin-top: 3rem;
    }

    .view-more h3 {
      color: #cbd5e1;
      margin-bottom: 2rem;
    }

    .category-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .category-card {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(100, 116, 139, 0.3);
      border-radius: 12px;
      padding: 1.5rem 2rem;
      text-decoration: none;
      color: #cbd5e1;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 600;
    }

    .category-card .icon {
      font-size: 2rem;
    }

    .category-card:hover {
      transform: translateY(-5px);
      border-color: rgba(96, 165, 250, 0.5);
      box-shadow: 0 10px 30px rgba(96, 165, 250, 0.2);
      color: #60a5fa;
    }

    /* About */
    .about {
      background: rgba(15, 23, 42, 0.5);
    }

    .about-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .about-content p {
      color: #cbd5e1;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      font-size: 1.125rem;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.25rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .category-links {
        flex-direction: column;
      }
    }
  `]
})
export class HomeComponent {
  private projectService = inject(ProjectService);
  protected featuredProjects = this.projectService.featuredProjects;
}
