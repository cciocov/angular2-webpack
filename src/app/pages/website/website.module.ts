import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';

import { routing } from './website.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    WebsiteComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class WebsiteModule {
}
