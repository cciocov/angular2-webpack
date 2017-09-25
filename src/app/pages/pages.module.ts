import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteModule } from './website/website.module';

import { NotFoundComponent } from './not-found/not-found.component';

import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    WebsiteModule,
    routing
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class PagesModule {
}
