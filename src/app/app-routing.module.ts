import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudiesPreviewComponent } from './case-studies-preview/case-studies-preview.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LinksComponent } from './links/links.component';
import { LinkRedirectComponent } from './link-redirect/link-redirect.component';
import { CaseStudyOrderInAppComponent } from './case-study-order-in-app/case-study-order-in-app.component';
import { CaseStudyQuickWrapGiftsComponent } from './case-study-quick-wrap-gifts/case-study-quick-wrap-gifts.component';
import { CaseStudySillageComponent } from './case-study-sillage/case-study-sillage.component';
import { DesignProcessComponent } from './design-process/design-process.component';

const routes: Routes = [
  { path: '', component: CaseStudiesPreviewComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'design-process', component: DesignProcessComponent, data: { fullBleed: true, title: 'Design Process | Reah Rajmangal' } },
  { path: 'work/order-in-app', component: CaseStudyOrderInAppComponent, data: { fullBleed: true, title: 'Case Study: L\'Artusi Dine-In | Reah Rajmangal' } },
  { path: 'work/quick-wrap-gifts', component: CaseStudyQuickWrapGiftsComponent, data: { fullBleed: true, title: 'Case Study: Quickwrap Gifts | Reah Rajmangal' } },
  { path: 'work/sillage', component: CaseStudySillageComponent, data: { fullBleed: true, title: 'Case Study: Sillage | Reah Rajmangal' } },
  { path: 'links', component: LinksComponent, data: { noIndex: true, hideFooter: true, hideNavLinks: true } },
  { path: 'links/:slug', component: LinkRedirectComponent, data: { noIndex: true, hideFooter: true, hideNavLinks: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
