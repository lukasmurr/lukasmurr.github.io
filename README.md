# Lukas Murr Portfolio

Eine moderne Portfolio-Website gebaut mit Angular 21 und Progressive Web App (PWA) Funktionen.

## 🚀 Features

- **Angular 21**: Neueste Angular-Version mit standalone components
- **Signals**: Moderne reaktive Programmierung mit Angular Signals
- **Control Flow**: Neue @if, @for, @empty Syntax
- **PWA**: Progressive Web App mit Service Worker
- **Responsive Design**: Optimiert für alle Bildschirmgrößen
- **Lazy Loading**: Optimierte Performance durch Code-Splitting
- **Modern UI**: Dunkles Theme mit Gradient-Effekten

## 📦 Technologie-Stack

- Angular 21.1.0
- TypeScript 5.9
- SCSS für Styling
- Angular Service Worker für PWA
- GitHub Pages für Hosting

## 🏗️ Projektstruktur

```
src/
├── app/
│   ├── components/     # Wiederverwendbare Komponenten
│   │   ├── header.component.ts
│   │   ├── footer.component.ts
│   │   └── project-card.component.ts
│   ├── pages/         # Seiten-Komponenten
│   │   ├── home.component.ts
│   │   ├── webdev.component.ts
│   │   ├── devops.component.ts
│   │   └── gaming.component.ts
│   ├── services/      # Angular Services
│   │   └── project.service.ts
│   └── models/        # TypeScript Interfaces
│       └── project.model.ts
├── styles.scss        # Globale Styles
└── index.html        # HTML Entry Point
```

## 🛠️ Entwicklung

### Voraussetzungen

- Node.js 20.x oder höher
- npm 10.x oder höher

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigiere zu `http://localhost:4200/`. Die App wird automatisch neu geladen, wenn du Änderungen an den Quelldateien vornimmst.

### Build

```bash
npm run build
```

Die Build-Artefakte werden im `dist/` Verzeichnis gespeichert.

### Production Build für GitHub Pages

```bash
npm run build:prod
```

Dieser Befehl erstellt einen optimierten Production-Build mit dem korrekten base-href für GitHub Pages.

## 🚢 Deployment

Die Website wird automatisch auf GitHub Pages deployt, wenn Änderungen zum `main` Branch gepusht werden.

Der Deployment-Prozess ist über GitHub Actions automatisiert (siehe `.github/workflows/deploy.yml`).

## 📱 PWA-Features

Die Anwendung ist als Progressive Web App konfiguriert und bietet:

- Offline-Funktionalität durch Service Worker
- Installierbar auf Desktop und Mobile
- App-Manifest mit Icons
- Optimierte Performance und Caching

## 🎨 Anpassung

### Projekte hinzufügen

Bearbeite `src/app/services/project.service.ts` um neue Projekte hinzuzufügen:

```typescript
{
  id: 'unique-id',
  title: 'Projekt Titel',
  description: 'Projekt Beschreibung',
  technologies: ['Tech1', 'Tech2'],
  category: 'webdev' | 'devops' | 'gaming',
  featured: true,
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...'
}
```

### Farben anpassen

Hauptfarben können in `src/styles.scss` angepasst werden.

## 📄 Lizenz

Dieses Projekt ist für persönliche Nutzung.

## 👤 Autor

**Lukas Murr**

- GitHub: [@lukasmurr](https://github.com/lukasmurr)
- Website: [lukasmurr.github.io](https://lukasmurr.github.io)

---

Built with ❤️ using Angular 21
