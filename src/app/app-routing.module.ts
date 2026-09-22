import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesPreviewComponent } from './case-studies-preview/case-studies-preview.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path: '', component: CaseStudiesPreviewComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'links', component: LinksComponent, data: { noIndex: true, hideFooter: true, hideNavLinks: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
