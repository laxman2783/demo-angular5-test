import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
 { path: 'app', component: AppComponent },
 { path: 'app-list', component: ListComponent }


 
];

export const routing = RouterModule.forRoot(appRoutes);