import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page5Component } from './components/page5/page5.component';
import { QuesoDetailComponent } from './components/queso-detail/queso-detail.component';

const routes: Routes = [  
 { path: '', redirectTo: '/landing', pathMatch: 'full' },
{ path: 'landing', component: LandingComponent },
{ path: 'page2', component: Page2Component },
{ path: 'page3', component: Page3Component },
{ path: 'page4', component: Page4Component },
{ path: 'page5', component: Page5Component },
{ path: 'detail/:id', component: QuesoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
