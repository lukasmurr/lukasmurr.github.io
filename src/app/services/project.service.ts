import { Injectable, signal, computed } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = signal<Project[]>([
    {
      id: '1',
      title: 'Angular 21 Portfolio',
      description: 'Moderne Portfolio-Website mit Angular 21, Signals und PWA-Unterstützung',
      technologies: ['Angular 21', 'TypeScript', 'SCSS', 'PWA'],
      category: 'webdev',
      featured: true,
      githubUrl: 'https://github.com/lukasmurr/lukasmurr.github.io'
    },
    {
      id: '2',
      title: 'E-Commerce Platform',
      description: 'Skalierbare E-Commerce-Lösung mit Microservices-Architektur',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker'],
      category: 'webdev',
      featured: true
    },
    {
      id: '3',
      title: 'CI/CD Pipeline',
      description: 'Automatisierte Build- und Deployment-Pipeline mit GitHub Actions',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      category: 'devops',
      featured: true
    },
    {
      id: '4',
      title: 'Cloud Infrastructure',
      description: 'Infrastructure as Code für Multi-Cloud-Umgebungen',
      technologies: ['Terraform', 'AWS', 'Azure', 'Ansible'],
      category: 'devops'
    },
    {
      id: '5',
      title: 'Unity 3D Game',
      description: 'Indie-Spiel mit prozeduraler Levelgenerierung',
      technologies: ['Unity', 'C#', 'Blender', 'FMOD'],
      category: 'gaming',
      featured: true
    },
    {
      id: '6',
      title: 'Game Physics Engine',
      description: 'Custom Physics Engine für 2D-Spiele',
      technologies: ['C++', 'OpenGL', 'SDL2'],
      category: 'gaming'
    }
  ]);

  // Computed signals using Angular 21 features
  public allProjects = computed(() => this.projects());
  public featuredProjects = computed(() => 
    this.projects().filter(p => p.featured)
  );
  public webdevProjects = computed(() => 
    this.projects().filter(p => p.category === 'webdev')
  );
  public devopsProjects = computed(() => 
    this.projects().filter(p => p.category === 'devops')
  );
  public gamingProjects = computed(() => 
    this.projects().filter(p => p.category === 'gaming')
  );

  getProjectsByCategory(category: 'webdev' | 'devops' | 'gaming') {
    return computed(() => 
      this.projects().filter(p => p.category === category)
    );
  }
}
