import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, closeOutline, codeOutline, brushOutline, serverOutline, globeOutline, mailOutline, callOutline, locationOutline, logoGithub, logoLinkedin, logoTwitter } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
   
    IonIcon
  ]
})
export class HomePage {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  isMenuOpen = false;
  activeSection = 'home';
  navLinks = ['Home', 'About', 'Skills', 'Services', 'Contact'];
  isScrolled = false;
  constructor() {
    addIcons({mailOutline,callOutline,locationOutline,logoGithub,logoLinkedin,logoTwitter,menuOutline,closeOutline,codeOutline,brushOutline,serverOutline,globeOutline});
  }

  // @HostListener('window:scroll', ['$event'])
  @HostListener('ionScroll', ['$event'])
  onScroll(event: any) {
    this.isScrolled = event.detail.scrollTop > 250;
    this.checkActiveSection();
  }

  checkActiveSection() {
    const sections = this.navLinks.map(link => ({
      id: link.toLowerCase(),
      element: document.getElementById(link.toLowerCase())
    }));

    for (const section of sections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }

  skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'DevOps', level: 70 }
  ];

  services = [
    {
      icon: 'code-outline',
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks and best practices.'
    },
    {
      icon: 'brush-outline',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that provide exceptional user experiences.'
    },
    {
      icon: 'server-outline',
      title: 'Backend Development',
      description: 'Developing robust and scalable server-side solutions with modern technologies.'
    },
    {
      icon: 'globe-outline',
      title: 'API Integration',
      description: 'Seamlessly connecting applications with third-party services and APIs.'
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      await this.content.scrollToPoint(0, element.offsetTop, 500); // Reduced from 1000ms to 500ms for faster scrolling
    }
    this.isMenuOpen = false;
  }
}