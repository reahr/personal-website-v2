import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CaseStudiesPreviewComponent } from './case-studies-preview/case-studies-preview.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CaseStudyCardComponent } from './case-studies-preview/case-study-card/case-study-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaseStudiesPreviewComponent,
    AboutMeComponent,
    CaseStudyCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
