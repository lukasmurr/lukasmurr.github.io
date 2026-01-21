import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { ProjectCardComponent } from '../components/project-card.component';

@Component({
  selector: 'app-devops',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="category-page">
      <div class="container">
        <div class="page-header">
          <div class="icon">⚙️</div>
          <h1>DevOps</h1>
          <p>
            Automatisierung, CI/CD-Pipelines, Container-Orchestrierung und Cloud-Infrastruktur.
            Moderne DevOps-Praktiken für effiziente Entwicklung und Deployment.
          </p>
        </div>

        <div class="projects-grid">
          @for (project of projects(); track project.id) {
            <app-project-card [project]="project" />
          } @empty {
            <div class="empty-state">
              <p>Noch keine Projekte in dieser Kategorie.</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .category-page {
      min-height: 100vh;
      padding: 4rem 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .icon {
      font-size: 5rem;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .page-header p {
      color: #cbd5e1;
      font-size: 1.125rem;
      line-height: 1.8;
      max-width: 700px;
      margin: 0 auto;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
    }

    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 4rem 0;
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      .icon {
        font-size: 3rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DevopsComponent {
  private projectService = inject(ProjectService);
  protected projects = this.projectService.devopsProjects;
}
