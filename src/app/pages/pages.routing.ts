import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);
