import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { LucideAngularModule } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';
import { ArrowRight, Github, Twitter, Code, Palette, Globe } from 'lucide-angular';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(LucideAngularModule.pick({ ArrowRight, Github, Twitter, Code, Palette, Globe })),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
