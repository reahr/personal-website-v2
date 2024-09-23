import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesPreviewComponent } from './case-studies-preview/case-studies-preview.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', component: CaseStudiesPreviewComponent },
  { path: 'about', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
