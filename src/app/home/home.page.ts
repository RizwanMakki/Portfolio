import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, closeOutline, codeOutline, brushOutline, serverOutline, globeOutline, mailOutline, callOutline, locationOutline, logoGithub, logoLinkedin, logoTwitter } from 'ionicons/icons';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';


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
  constructor(private location: Location) { 
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
        if (this.activeSection !== section.id) {
          this.activeSection = section.id;
          this.location.replaceState(section.id); // URL update on scroll
        }
        break;
      }
    }
  }
}


  skills = [
    {
      name: 'Angular',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    { 
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'React Native',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Ionic',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
    },
    {
      name: 'Firebase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    }
  ];
  
  additionalSkills = ['Git', 'Docker', 'AWS', 'GraphQL', 'MongoDB', 'PostgreSQL'];
  

  services = [
    {
      icon: 'code-outline',
      title: 'Website Development',
      description: 'We design and develop stunning, responsive websites that captivate audiences and drive resultss.'
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
    },
    {
      icon: 'laptop-outline',
      title: 'Web App Development',
      description: 'Developing fast, secure, and scalable web applications that deliver exceptional functionality and performance.'
    },
    {
      icon: 'phone-portrait-outline',
      title: 'Mobile App development',
      description: 'Building high-performance Android & iOS apps using modern frameworks for a seamless user experience.'
    },
    {
      icon: 'speedometer-outline',
      title: 'SEO & Performance Optimization',
      description: 'Improving website speed, responsiveness, and search engine rankings for better visibility.'
    },
    {
      icon: 'cloud-outline',
      title: 'Firebase Backend & Authentication',
      description: ' Description: Implementing real-time databases, authentication, and hosting with Firebase for scalable apps.'
    },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

 
async scrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    await this.content.scrollToPoint(0, element.offsetTop, 500); 
    this.location.replaceState(elementId); // Update URL without reloading
  }
  this.isMenuOpen = false;
}
}