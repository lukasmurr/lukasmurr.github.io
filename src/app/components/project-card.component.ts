import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card">
      @if (project().imageUrl) {
        <div class="project-image">
          <img [src]="project().imageUrl" [alt]="project().title" />
        </div>
      }
      
      <div class="project-content">
        <div class="project-header">
          <h3>{{ project().title }}</h3>
          @if (project().featured) {
            <span class="featured-badge">Featured</span>
          }
        </div>
        
        <p class="project-description">{{ project().description }}</p>
        
        <div class="project-technologies">
          @for (tech of project().technologies; track tech) {
            <span class="tech-badge">{{ tech }}</span>
          }
        </div>
        
        <div class="project-links">
          @if (project().githubUrl) {
            <a [href]="project().githubUrl" target="_blank" rel="noopener noreferrer" class="project-link">
              <span class="icon">📁</span> GitHub
            </a>
          }
          @if (project().liveUrl) {
            <a [href]="project().liveUrl" target="_blank" rel="noopener noreferrer" class="project-link">
              <span class="icon">🚀</span> Live Demo
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(100, 116, 139, 0.3);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      transform: translateY(-5px);
      border-color: rgba(96, 165, 250, 0.5);
      box-shadow: 0 10px 30px rgba(96, 165, 250, 0.2);
    }

    .project-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
      background: linear-gradient(135deg, #1e293b, #334155);
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .project-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    .project-card h3 {
      color: #e2e8f0;
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .featured-badge {
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      white-space: nowrap;
    }

    .project-description {
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 1rem;
      flex: 1;
    }

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tech-badge {
      background: rgba(96, 165, 250, 0.1);
      color: #60a5fa;
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      font-size: 0.875rem;
      border: 1px solid rgba(96, 165, 250, 0.3);
    }

    .project-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .project-link {
      color: #60a5fa;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(96, 165, 250, 0.3);
      border-radius: 6px;
      background: rgba(96, 165, 250, 0.05);
    }

    .project-link:hover {
      background: rgba(96, 165, 250, 0.15);
      border-color: #60a5fa;
      transform: translateX(3px);
    }

    .icon {
      font-size: 1.1rem;
    }
  `]
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
